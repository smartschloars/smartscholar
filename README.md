# Smart Scholar

Next.js site for Smart Scholar.

## Local setup

1. Install dependencies:
   `npm ci`
2. Create `.env.local` from `.env.example`.
3. Start dev server:
   `npm run dev`

## GitHub Pages deployment

This repo currently deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The Pages workflow builds a static export by setting:

- `DEPLOY_TARGET=github-pages`

That enables `output: 'export'` in `next.config.js` and deploys the generated `out/` folder.

## Important limitation

GitHub Pages is static hosting. Because of that, `pages/api/contact.js` will not run on the deployed Pages site.

So:

- the site UI will deploy
- the contact form backend will not work on GitHub Pages

If you need the contact form in production, deploy later to Vercel or another host that supports Next.js server functions.

## Security

If any real passwords were ever committed or shared, rotate them immediately. Removing `.env.local` from git tracking does not protect previously exposed credentials.
