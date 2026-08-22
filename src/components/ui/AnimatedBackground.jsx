import { useEffect, useRef } from "react";

/**
 * Ambient dashboard background: a restrained technical grid with a
 * slowly moving network of nodes. It stays behind content and never
 * intercepts interaction.
 */
const NODE_COUNT = 70;
const NODE_RADIUS_MIN = 1.5;
const NODE_RADIUS_MAX = 2.5;
const NODE_DRIFT_SPEED = 0.035;
const CONNECTION_DISTANCE = 150;
const CONNECTION_OPACITY_MIN = 0.035;
const CONNECTION_OPACITY_MAX = 0.075;
const GRID_SPACING = 110;
const GRID_OPACITY = 0.018;
const GRID_DRIFT_SPEED = 0.006;
const MOUSE_RADIUS = 160;
const MOUSE_GLOW_OPACITY = 0.025;
const SIGNAL_COLOR = "59, 130, 246";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);
  const gridOffsetRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      dimensionsRef.current = { width, height, dpr };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initNodes() {
      const { width, height } = dimensionsRef.current;
      nodesRef.current = Array.from({ length: NODE_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: NODE_RADIUS_MIN + Math.random() * (NODE_RADIUS_MAX - NODE_RADIUS_MIN),
          vx: Math.cos(angle) * NODE_DRIFT_SPEED,
          vy: Math.sin(angle) * NODE_DRIFT_SPEED,
          baseAlpha: 0.18 + Math.random() * 0.22,
        };
      });
    }

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

    function drawNodes(width, height) {
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = CONNECTION_OPACITY_MIN +
              (1 - dist / CONNECTION_DISTANCE) *
              (CONNECTION_OPACITY_MAX - CONNECTION_OPACITY_MIN);
            ctx.strokeStyle = `rgba(${SIGNAL_COLOR}, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        let alpha = node.baseAlpha;
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) alpha += (1 - dist / MOUSE_RADIUS) * 0.22;
        }
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${SIGNAL_COLOR}, ${Math.min(alpha, 0.5)})`;
        ctx.fill();
      }
    }

    function drawMouseGlow() {
      const mouse = mouseRef.current;
      if (!mouse.active) return;
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_RADIUS * 1.4);
      gradient.addColorStop(0, `rgba(${SIGNAL_COLOR}, ${MOUSE_GLOW_OPACITY})`);
      gradient.addColorStop(1, `rgba(${SIGNAL_COLOR}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);
    }

    function render() {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);
      gridOffsetRef.current += GRID_DRIFT_SPEED;
      drawGrid(width, height);
      drawNodes(width, height);
      drawMouseGlow();
      rafRef.current = requestAnimationFrame(render);
    }

    function renderStaticFrame() {
      const { width, height } = dimensionsRef.current;
      ctx.clearRect(0, 0, width, height);
      drawGrid(width, height);
      drawNodes(width, height);
    }

    function handleMouseMove(e) {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    }

    function handleMouseLeave() {
      mouseRef.current.active = false;
    }

    function handleResize() {
      resize();
      initNodes();
      if (prefersReducedMotion) renderStaticFrame();
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!prefersReducedMotion && !rafRef.current) {
        rafRef.current = requestAnimationFrame(render);
      }
    }

    resize();
    initNodes();

    if (prefersReducedMotion) {
      renderStaticFrame();
    } else {
      rafRef.current = requestAnimationFrame(render);
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
      window.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }

    window.addEventListener("resize", handleResize);

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
      style={{ background: "#090b10" }}
    />
  );
}
