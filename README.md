# Jose Alberto Ruiz Mendoza — Portfolio

Personal portfolio built with **React + TypeScript + Vite + Tailwind CSS** and Bootstrap Icons.

## Run locally

```bash
npm install   # first time only
npm run dev
```

## Editing content

All the content lives in `src/data/`, so you never need to touch the components:

| File | What it contains |
| --- | --- |
| `src/data/profile.ts` | Name, tagline, about me, highlights, email, WhatsApp, LinkedIn, GitHub |
| `src/data/skills.ts` | Skill areas and technology chips |
| `src/data/projects.ts` | Projects list |

### Adding a project

1. Save a screenshot in `public/img/projects/` (e.g. `my-app.jpg`, ~1400px wide).
2. Add an object to the array in `src/data/projects.ts`:

```ts
{
  id: 'my-app',
  title: 'My App',
  description: 'What it does.',
  highlights: ['Feature one', 'Feature two'],
  tags: ['React', 'TypeScript'],
  image: 'img/projects/my-app.jpg',
},
```

Add `featured: true` to make a card take the full width.

## Contact

- **WhatsApp** and **email** buttons open a chat/email directly.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages on every push to `main`
(Settings → Pages → Source: **GitHub Actions**).
