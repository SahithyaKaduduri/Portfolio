# Sahithya's Portfolio

A dark, elegant personal portfolio built with React + Vite.

## Run it locally

You'll need [Node.js](https://nodejs.org) (v18+).

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

## Edit your content

Everything you'll want to change routinely lives in `src/data.js`:
- `profile` — name, tagline, bio, hobbies, contact links, resume path
- `education` — your schools/degrees
- `skillGroups` — your skills, grouped
- `projects` — your project cards
- `certificates` — certificate images + captions (images live in `src/assets/certs/`)

To swap your photo or resume, replace `src/assets/profile.jpg` or
`public/Sahithya_Kaduduri_Resume.pdf` with your own file (keep the same name,
or update the path in `src/data.js`).

To restyle colors/fonts, edit the CSS variables at the top of `src/index.css`.

## Deploy for free

1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, "Add New → Project", import the repo, click Deploy.
3. You'll get a permanent link like `https://sahithya-portfolio.vercel.app`.

Netlify and GitHub Pages work the same way.
