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

## Deploy to Cloudflare Pages

This is a static site. There is no Worker and no Pages Functions. Cloudflare Pages serves the files in `public/`.

`wrangler.jsonc` uses `pages_build_output_dir` (`./public`). That is the Pages project flag. Do not add `main`, `assets`, or Worker `routes` — those create a Worker.

### From the dashboard (preferred)

1. In the Cloudflare dashboard, open **Workers & Pages**.
2. **Create** → **Pages** → **Import an existing Git repository**.
3. Connect `danielhayessmith/wp-update-guard-site`.
4. Build settings:
   - Framework preset: **None**
   - Build command: `npm run prepare`
   - Build output directory: `public`
   - Production branch: `main`
5. Deploy to the Daniel@schutzsmith.com account (`59ba9a1935ca8eea580443faafbd9ecc`).
6. On the Pages project, open **Custom domains** and add `wpupdateguard.com` and `www.wpupdateguard.com`. The zone already uses Cloudflare nameservers, so Pages can create the records. Do not attach those hostnames to a Worker.

### From the CLI

```bash
npx wrangler login
CLOUDFLARE_ACCOUNT_ID=59ba9a1935ca8eea580443faafbd9ecc npm run deploy
```

That runs `wrangler pages deploy --project-name=wp-update-guard` and uploads `public/`. Custom domains are still attached on the Pages project, not in Wrangler.

## What’s in the repo

- `public/index.html` is the homepage.
- `public/styles/tokens.css` holds the brand color, type, space, and radius tokens.
- `public/styles/site.css` holds layout.
- `public/assets/logo/` is the Guard lockup, mascot, icon, and wordmark. Use the SVG files. Do not retype the wordmark.
- `public/assets/bots/` is the Grok, Muse, and ChatGPT app icons.
- `skills/wp-update-guard/` is the installable agent skill (`npx skills add`).
- `design/` is the brand book and token source.

Get started and Get WP Update Guard jump to `#bots`. The live Grok Bot link is `https://x.ai/bot/PiMQ3ggqSw61_IbxsIAB3`.

## Install the AI Skill

The homepage install command (from the public skill repo) is:

```bash
npx skills add danielhayessmith/wp-update-guard
```

That copies `skills/wp-update-guard/` into the agent you pick. The skill updates WordPress on a staging copy first, screenshots key pages, rolls back if a page breaks, and only then updates the live site.

```bash
python3 skills/wp-update-guard/scripts/guard.py init
python3 skills/wp-update-guard/scripts/compare-pages.py --self-test
```

Muse and the ChatGPT Plugin are still Coming soon. Privacy and Contact stay placeholders.
