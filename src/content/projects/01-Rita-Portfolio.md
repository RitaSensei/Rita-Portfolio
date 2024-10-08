---
title: "Rita's Portfolio"
publishedAt: 2024-06-21
description: "A portfolio site built with Astro and TailwindCSS. This site is a work in progress."

slug: "rita-portfolio"
image:
  src: "/projects_images/rita_portfolio_page.webp"
  alt: "rita-portfolio"
img_logo:
  src: "/projects_images/rita_portfolio_logo.webp"
  alt: "rita-portfolio-logo"
github: "https://github.com/RitaSensei/Rita-Portfolio"
website: "https://rita-portfolio.vercel.app/"
technologies:
  - name: "Astro"
    route: "/tech_logos/astro.svg"
  - name: "JavaScript"
    route: "/tech_logos/javascript.svg"
  - name: "TypeScript"
    route: "/tech_logos/typescript.svg"
  - name: "CSS"
    route: "/tech_logos/css.svg"
  - name: "TailwindCSS"
    route: "/tech_logos/tailwindcss.svg"
  - name: "Vercel"
    route: "/tech_logos/vercel.svg"
---

## Rita's Portfolio

This portfolio is created/inspired by template from [Gorka](https://gorka.iand.dev). - [Template GitHub](https://github.com/GRKdev/astro-portfolio)

NB: Additional color themes can also be configured on the `src/data/theme.ts` file.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Usage

<ul style="list-style-type: disc; padding-left: 30px;">
  <li>You can modify all the information in the files in the <code>data</code> folder (presentation, social links, projects list, colors).</li>
  <li>You can write articles in <code>markdown</code> format in the <code>content/projects</code> folder.</li>
</ul>

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

<div style="display: flex; justify-content: center; padding-top: 40px">
  <img src="https://img.shields.io/github/stars/RitaSensei/Rita-Portfolio" alt="GitHub Stars" style="margin-right: 10px;"/>
  <img src="https://img.shields.io/github/last-commit/RitaSensei/Rita-Portfolio" alt="GitHub Last Commit" />
</div>
