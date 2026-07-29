# Sivaan — Portfolio

A dark-themed, data/AI-engineer-styled portfolio built with React, Vite, and
Tailwind CSS. Designed to help land Data Analyst, AI/ML Engineer, and Data
Science roles by presenting real project case studies rather than a generic
template.

## Tech stack

- **React 18 + Vite** — fast dev server, optimized static build
- **Tailwind CSS** — utility-first styling with custom design tokens
- **Framer Motion** — subtle scroll/entry animations (available, optional to expand)
- **lucide-react** — icon set

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── ui/            # Reusable primitives (Button, GlassCard, Timeline, etc.)
│   └── sections/       # One component per page section
├── data/               # All editable content lives here as plain JS
├── hooks/              # useScrollSpy for active-nav highlighting
├── App.jsx
├── main.jsx
└── index.css
```

**To update content, you only need to edit files in `src/data/`** —
`projects.js`, `skills.js`, `experience.js`, `certifications.js`, `blog.js`.
No component code needs to change for routine content updates.

## Getting started (local development)

1. **Install dependencies** (requires Node.js 18+):
   ```bash
   npm install
   ```

2. **Run the dev server**:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173` with hot-reload.

3. **Build for production** (outputs to `dist/`):
   ```bash
   npm run build
   ```

4. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

## Personalizing before you deploy

1. **Resume**: drop your real `resume.pdf` into `public/` (replacing the
   placeholder `.txt` file). The Hero section's "Download Resume" button
   already points to `/resume.pdf`.
2. **Contact links**: update the placeholder email/LinkedIn/GitHub URLs in
   `src/components/layout/Footer.jsx` and `src/components/sections/Contact.jsx`.
3. **Contact form**: the form posts to [Formspree](https://formspree.io) (a
   free static-form backend, since GitHub Pages has no server). Sign up,
   create a form, and replace `YOUR_FORM_ID` in
   `src/components/sections/Contact.jsx` with your real form ID.
4. **GitHub username**: confirm `Sivaan66` is correct in
   `src/components/sections/GitHubStats.jsx` and `Footer.jsx` (used for the
   live contribution graph and GitHub link).
5. **Project GitHub links**: update the `github` field for each project in
   `src/data/projects.js` once those repos are public.
6. **Adding future projects**: append a new object to the array in
   `src/data/projects.js` — the grid and modal update automatically.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that automatically builds and deploys on every push to `main`.

### One-time setup

1. **Push this project to a GitHub repository** (e.g. named
   `sivaan-portfolio`).

2. **Update the Vite base path** in `vite.config.js` to match your repo name
   exactly:
   ```js
   base: "/your-repo-name/",
   ```

3. In your GitHub repo, go to **Settings → Pages**, and under **Build and
   deployment → Source**, select **GitHub Actions**.

4. Push to `main` — the workflow will build and deploy automatically. Check
   the **Actions** tab to watch progress.

5. Your site will be live at:
   ```
   https://<your-github-username>.github.io/<your-repo-name>/
   ```

### Manual deploy (alternative)

If you'd rather deploy manually instead of via GitHub Actions:
```bash
npm run build
npm run deploy
```
This uses the `gh-pages` package to push the `dist/` folder to a `gh-pages`
branch — make sure Pages is set to serve from that branch in
**Settings → Pages** if you use this method instead.

## Accessibility & performance notes

- All interactive elements have visible keyboard focus states.
- Animations respect `prefers-reduced-motion`.
- Layout is responsive from mobile (375px) up through desktop.
- SEO meta tags (title, description, Open Graph) are set in `index.html`.

## License

Personal portfolio — feel free to use the structure as a reference for your
own, but please swap out the content for your own work.
