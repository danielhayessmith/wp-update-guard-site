# WP Update Guard site

Public one-page site for WP Update Guard. The Guard updates WordPress plugins and themes on a staging copy first, checks key pages, rolls back if a page breaks, and only then updates the live site.

The layout and copy match the approved homepage treatment. Do not recolor or rewrite them without a new design pass.

## Run it locally

You need Node 22 or later.

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147). Wrangler serves the files in `public/`.

To confirm the approved copy and asset paths are still in the page:

```bash
npm run check:copy
```

## Deploy to Cloudflare

This is a static Workers assets project (the current Pages-style host). From this directory:

```bash
npx wrangler login
npm run deploy
```

`wrangler.jsonc` points `assets.directory` at `public/`. There is no Worker script. Cloudflare serves the HTML, CSS, fonts, and images from the edge.

To attach a custom domain, add it on the Worker in the Cloudflare dashboard after the first deploy.

## What's in the repo

- `public/index.html` is the homepage.
- `public/styles/tokens.css` holds the brand color, type, space, and radius tokens.
- `public/styles/site.css` holds layout.
- `public/assets/logo/` is the Guard lockup, mascot, icon, and wordmark. Use the SVG files. Do not retype the wordmark.
- `public/assets/bots/` is the Grok and Muse app icons.
- `design/` is the brand book and token source.

Get started and Get WP Update Guard jump to `#bots`. The live Grok Bot link is `https://x.ai/bot/PiMQ3ggqSw61_IbxsIAB3`.

Muse, the AI Skill download, Privacy, and Contact are still placeholders.
