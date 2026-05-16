# Scientific Mechatronics Portfolio (React + Vite)

A research-grade, engineering-focused portfolio designed as a robotics command-center interface. Built with React, Vite, Tailwind CSS, Framer Motion, Three.js (React Three Fiber), GSAP, and D3.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Three.js + React Three Fiber + Drei
- GSAP
- D3.js
- gh-pages (deployment)

## Features

- Robotics-lab command bar navigation
- Scientific hero with telemetry waveform, live metrics, and 3D robotics digital twin
- Engineering profile in research abstract format
- Diagnostics dashboard with circular gauges, radar chart, and subsystem health bars
- Scientific case-study projects with architecture, challenges, benchmarks, and outcomes
- Engineering visualization section (oscilloscope, heatmap, motion diagram)
- Mission-log experience timeline
- Publications / research section with paper and patent placeholders
- Secure terminal-inspired contact interface
- Animated particle network + subtle code rain background
- Boot sequence loading screen
- GitHub Pages deployment support

## Project Structure

    .
    |- .github/workflows/deploy.yml
    |- public/
    |  |- assets/
    |  |- resume.pdf
    |- src/
    |  |- components/
    |  |- data/content.js
    |  |- App.jsx
    |  |- index.css
    |  |- main.jsx
    |- index.html
    |- package.json
    |- postcss.config.js
    |- tailwind.config.js
    |- vite.config.js

## Local Setup

1. Install dependencies:

       npm install

2. Start development server:

       npm run dev

3. Build production bundle:

       npm run build

4. Preview production build:

       npm run preview

## GitHub Pages Deployment (Vite)

### Option A: Deploy from your local machine with gh-pages

1. Create a new GitHub repository (for example: personal-web).
2. Update homepage in package.json:

       "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/"

3. If your repo name is not personal-web, update fallback value in vite.config.js:

       const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "YOUR_REPO_NAME";

4. Commit and push your code:

       git init
       git add .
       git commit -m "Initial portfolio setup"
       git branch -M main
       git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
       git push -u origin main

5. Deploy:

       npm run deploy

6. In GitHub repository settings:
   - Go to Pages
   - Set Source to Deploy from a branch
   - Select branch gh-pages and folder /(root)

7. Wait a few minutes and open:

       https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/

### Option B: Auto-deploy with GitHub Actions

1. Push to main branch.
2. The workflow in .github/workflows/deploy.yml builds and deploys dist to gh-pages.
3. In GitHub Pages settings, select Deploy from a branch and pick gh-pages.

## Personalization Checklist

- Replace placeholder links in src/data/content.js
- Replace profile image in public/assets/
- Replace public/resume.pdf with your real resume
- Update contact details and location
- Add real project screenshots and live demo URLs

## Performance and Accessibility Notes

- 3D scene is lazy-loaded using React Suspense for faster initial paint
- Semantic section tags and headings are used across all modules
- Form labels and accessible aria labels are preserved
- Reduced motion preference is respected in global CSS

## License

MIT
