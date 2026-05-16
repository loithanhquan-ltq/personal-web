# Mechatronics Engineer Portfolio (React + Vite)

A premium, responsive personal portfolio website designed for mechatronics engineers. Built with React, Vite, Tailwind CSS, and Framer Motion, with dark/light mode and GitHub Pages deployment support.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- gh-pages (deployment)

## Features

- Sticky responsive navbar with smooth scrolling
- Full-screen hero with terminal-style intro and typing animation
- About, Skills, Projects, Timeline, Contact sections
- Animated project cards and skill progress bars
- Dark/light mode toggle persisted in localStorage
- Loading screen and animated particle background
- GitHub contribution graph placeholder
- Blog placeholder section
- Visitor counter (localStorage)
- Download resume button
- SEO-friendly metadata and semantic section structure

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

- Images are lazy-loaded where appropriate
- Semantic section tags and headings are used
- Form labels are present for inputs
- Motion is subtle to reduce cognitive load

## License

MIT
