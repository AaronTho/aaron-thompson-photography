# Aaron Thompson Photography

Personal photography portfolio — portrait, family, event, and lifestyle work.
Based in Delco, serving the greater Philadelphia and Main Line area.

> Auto-deploy on push to `main` is wired up via Netlify ↔ GitHub.
> Live at https://aaron-thompson-photography.netlify.app.

## Stack

- [Astro](https://astro.build) (static site, TypeScript strict)
- [Tailwind CSS](https://tailwindcss.com) v4
- [MDX](https://mdxjs.com) for content
- Hosted on [Netlify](https://www.netlify.com), auto-deploy from `main`

## Local development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the production build
```

## Content

- Galleries: `src/content/galleries/*.md(x)`
- Pages: `src/pages/`
- Images: `src/assets/` (optimized via Astro `<Image />`) or `public/` (passthrough)
