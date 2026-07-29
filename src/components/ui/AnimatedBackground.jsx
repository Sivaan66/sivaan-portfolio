import { useEffect, useRef } from "react";

/**
 * AnimatedBackground
 * ------------------------------------------------------------------
 * A full-screen, fixed, non-interactive canvas background made of
 * three subtle layers:
 *
 *   1. A large-spacing technical grid (barely-there, slight drift)
 *   2. A slowly-floating "neural network" of nodes + connecting lines
 *   3. A soft cursor-following glow that nudges/brightens nearby nodes
 *
 * Design intent: this should read as "AI research lab dashboard",
 * closer to Vercel/Linear/Stripe ambient backgrounds than anything
 * gaming or cyberpunk — slow, quiet, low-opacity, never competing
 * with foreground content.
 *
 * Usage: mount once, high in the tree (e.g. in App.jsx), styled to
 * sit behind everything via fixed positioning + negative z-index.
 * It never intercepts clicks (pointer-events: none is applied here
 * directly, not left to the caller).
 * ------------------------------------------------------------------
 */

// ---- Tunable constants -------------------------------------------------
const NODE_COUNT = 90; // within the requested 70–120 range
const NODE_RADIUS_MIN = 2;
const NODE_RADIUS_MAX = 3;
const NODE_DRIFT_SPEED = 0.05; // px/frame-ish — deliberately slow
const CONNECTION_DISTANCE = 150; // px, beyond which nodes never connect
const CONNECTION_OPACITY_MIN = 0.06;
const CONNECTION_OPACITY_MAX = 0.12;
const GRID_SPACING = 96; // px between grid lines — "large spacing"
const GRID_OPACITY = 0.025; // "barely noticeable"
const GRID_DRIFT_SPEED = 0.008; // extremely slow pan
const MOUSE_RADIUS = 180; // px — how far the cursor influence reaches
const MOUSE_GLOW_OPACITY = 0.04; // below 5%, per spec
const MOUSE_NODE_PUSH = 0.4; // how strongly nearby nodes are nudged
const SIGNAL_COLOR = "52, 216, 168"; // #34D8A8 as an rgb triplet

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  // All mutable animation state lives in refs, not React state —
  // this loop runs every frame and must never trigger re-renders.
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const gridOffsetRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---- Sizing (retina-aware) -----------------------------------
    // We scale the backing canvas by devicePixelRatio for crisp lines
    // on high-DPI screens, then scale the drawing context back down
    // so all coordinate math below can stay in plain CSS pixels.
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap for perf
      const width = window.innerWidth;
      const height = window.innerHeight;

      dimensionsRef.current = { width, height, dpr };

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    // ---- Node initialization --------------------------------------
    // Random positions, radii, and independent drift directions so
    // the network never looks like it's moving in lockstep.
    function initNodes() {
      const { width, height } = dimensionsRef.current;
      const nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        const angle = Math.random() * Math.PI * 2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius:
            NODE_RADIUS_MIN +
            Math.random() * (NODE_RADIUS_MAX - NODE_RADIUS_MIN),
          // Each node drifts in its own slow, fixed direction, plus a
          // tiny sinusoidal wobble so paths don't look perfectly linear.
          vx: Math.cos(angle) * NODE_DRIFT_SPEED,
          vy: Math.sin(angle) * NODE_DRIFT_SPEED,
          wobblePhase: Math.random() * Math.PI * 2,
          // Per-node brightness baseline; boosted temporarily when the
          // cursor passes nearby.
          baseAlpha: 0.35 + Math.random() * 0.35,
          boost: 0,
        });
      }
      nodesRef.current = nodes;
    }

    // ---- Layer 1: technical grid ------------------------------------
    function drawGrid(width, height) {
      ctx.save();
      ctx.strokeStyle = `rgba(${SIGNAL_COLOR}, ${GRID_OPACITY})`;
      ctx.lineWidth = 1;

      const offset = gridOffsetRef.current % GRID_SPACING;

      for (let x = -GRID_SPACING + offset; x < width + GRID_SPACING; x += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -GRID_SPACING + offset; y < height + GRID_SPACING; y += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ---- Layer 2 + 3: neural network + mouse interaction -----------
    function updateAndDrawNodes(width, height) {
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const time = performance.now();

      // Update positions first (movement + gentle wrap-around at edges)
      for (const node of nodes) {
        // Tiny wobble layered on top of the linear drift keeps motion
        // from feeling mechanical, while staying imperceptibly slow.
        const wobble = Math.sin(time * 0.0002 + node.wobblePhase) * 0.05;
        node.x += node.vx + wobble;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Cursor proximity: nudge position slightly and boost brightness.
        // Decays back to 0 each frame so the effect only lives near the
        // cursor, never accumulates.
        node.boost *= 0.92;
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const proximity = 1 - dist / MOUSE_RADIUS;
            node.boost = Math.max(node.boost, proximity);
            // Gentle push away from the cursor, stronger the closer it is.
            const pushStrength = (proximity * MOUSE_NODE_PUSH) / (dist || 1);
            node.x += dx * pushStrength * 0.02;
            node.y += dy * pushStrength * 0.02;
          }
        }
      }

      // Draw connections first (so nodes render on top of lines)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            // Closer nodes get slightly more visible connections, mapped
            // into the requested 0.06–0.12 opacity band.
            const t = 1 - dist / CONNECTION_DISTANCE;
            const opacity =
              CONNECTION_OPACITY_MIN +
              t * (CONNECTION_OPACITY_MAX - CONNECTION_OPACITY_MIN);
            const boost = Math.max(a.boost, b.boost) * 0.15;

            ctx.strokeStyle = `rgba(${SIGNAL_COLOR}, ${opacity + boost})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const alpha = Math.min(node.baseAlpha + node.boost * 0.5, 0.9);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + node.boost * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${SIGNAL_COLOR}, ${alpha})`;
        ctx.fill();
      }
    }

    // ---- Layer 3b: soft radial glow following the cursor -------------
    function drawMouseGlow() {
      const mouse = mouseRef.current;
      if (!mouse.active) return;

      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        MOUSE_RADIUS * 1.6
      );
      gradient.addColorStop(0, `rgba(${SIGNAL_COLOR}, ${MOUSE_GLOW_OPACITY})`);
      gradient.addColorStop(1, `rgba(${SIGNAL_COLOR}, 0)`);

      ctx.save();
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
      ctx.restore();
    }

    // ---- Main render loop --------------------------------------------
    function render() {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);

      gridOffsetRef.current += GRID_DRIFT_SPEED;

      drawGrid(width, height);
      updateAndDrawNodes(width, height);
      drawMouseGlow();

      rafRef.current = requestAnimationFrame(render);
    }

    // ---- Static single-frame render for reduced-motion users --------
    function renderStaticFrame() {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);
      drawGrid(width, height);

      // Draw nodes and connections once, with no per-frame movement
      // or mouse interaction — respects prefers-reduced-motion while
      // still conveying the intended visual.
      const nodes = nodesRef.current;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const t = 1 - dist / CONNECTION_DISTANCE;
            const opacity =
              CONNECTION_OPACITY_MIN +
              t * (CONNECTION_OPACITY_MAX - CONNECTION_OPACITY_MIN);
            ctx.strokeStyle = `rgba(${SIGNAL_COLOR}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${SIGNAL_COLOR}, ${node.baseAlpha})`;
        ctx.fill();
      }
    }

    // ---- Event handlers ------------------------------------------------
    function handleMouseMove(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    }

    function handleMouseLeave() {
      mouseRef.current.active = false;
    }

    function handleResize() {
      resize();
      initNodes();
      if (prefersReducedMotion) renderStaticFrame();
    }

    // Pause the animation loop entirely when the tab isn't visible —
    // saves CPU/battery and avoids the classic "huge dt on return" jump
    // since we don't use delta-time-based movement.
    function handleVisibilityChange() {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!prefersReducedMotion && !rafRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    }

    // ---- Boot -----------------------------------------------------
    resize();
    initNodes();

    if (prefersReducedMotion) {
      // No animation loop at all — a single calm frame is drawn and left.
      renderStaticFrame();
    } else {
      rafRef.current = requestAnimationFrame(render);
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    window.addEventListener("resize", handleResize);

    // ---- Cleanup ----------------------------------------------------
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "#0A0E0E" }}
    />
  );
}
