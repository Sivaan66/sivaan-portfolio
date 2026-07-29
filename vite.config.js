import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace 'sivaan-portfolio' below with your actual GitHub repo name.
// GitHub Pages serves project sites from https://<username>.github.io/<repo-name>/
// so Vite needs to know that base path to resolve JS/CSS/asset URLs correctly.
export default defineConfig({
  plugins: [react()],
  base: "/sivaan-portfolio/",
});
