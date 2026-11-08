# Nafaz Rahi — Portfolio

A personal portfolio built with React, Vite and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy to Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Select the repository.
4. Set **Build command** to `npm run build`.
5. Set **Publish directory** to `dist`.
6. Deploy.

No environment variables or backend are required.

## Update content

Most of the content is in `src/main.jsx`. Update the `projects` array, skills, education and contact details there. The visual system is in `src/style.css`.

## Notes

- The portfolio content is based on the supplied resume.
- No employment history or unlisted achievements have been invented.
- The live Dhaka clock uses the browser's current time.
- Google Fonts are loaded remotely; the site still works with system fallbacks if unavailable.
