WP Update Guard is a friendly AI helper that updates WordPress plugins and themes on a staging copy first, checks the key pages with before-and-after screenshots, rolls back on its own if anything breaks, and only then updates the live site. The brand exists to take the dread out of clicking **Update**. Everything should feel calm, capable and a little bit cheerful — a small guard who has your back.

## Content fundamentals

- **Plain, direct, reassuring.** Short sentences. Say what happens, in order: "It updates a copy of your site first. If a page breaks, it rolls back." No jargon (no "CI", "regression", "diff", "pipeline"), no hype ("revolutionary", "10x", "AI-powered magic").
- **Talk to "you".** The product is "WP Update Guard" or "the Guard" — never "we" doing the work. "Your sites", "your clients".
- **Sentence case** for headings and buttons: "Get WP Update Guard", "Check the pages". Never all caps except the `eyebrow` style.
- **Name the outcome, not the feature.** "Go live only if it passes" beats "Conditional production deployment".
- **No emoji.** The mascot carries the warmth.
- Real lines to reuse: "Update WordPress without the dread." · "Update staging. Check the pages. Go live only if it passes." · "One Guard can look after all your sites."

## Logo and mascot

The mark is the **Guard**: a shield-shaped little bot with two oval eyes, a check mark for a smile, and a refresh-arrow antenna. Shield = protection, check = passed, arrow = updates.

- Use `lockup-light.svg` on `surface` (light) and `lockup-dark.svg` on `brand-navy-deep` or any dark ground. Never recolor the parts.
- Use `mascot-*.svg` (with antenna) at 40px tall and up. Below 40px, and for favicons and app icons, use `icon-*.svg` — the antenna drops out so the face stays legible at 16px.
- Clear space around any logo = the height of the mascot's eye (about 1/6 of mascot height). Minimum lockup height: 28px.
- The wordmark is Inter Bold, "WP Update" in `ink`/white and "Guard" in `green-text`. It is outlined in the SVGs — do not retype it.
- The mascot may appear alone as a friendly presence (hero, empty states, success messages). Don't add arms, props or new expressions; don't rotate or stretch it.

## Visual foundations

**Color.** Mostly white space and navy ink, with green reserved for "this is safe / this passed". Pages lead with `surface`, alternate sections on `surface-alt`, and close on `brand-navy-deep`. Primary buttons are `action` with `on-action` text. `brand-green` is for marks and fills only — set green text in `green-text`. `fail` appears only for rolled-back states and always beside the words "Rolled back". Pass and fail are never told apart by color alone: they always carry the words Pass / Rolled back and a check / arrow icon.

**Type.** One family, Inter. `display` for the hero only, `heading` for section titles, `title` for step and card titles, `body-lg` for intros, `body` for everything else, `label` for buttons and badges, `eyebrow` (uppercase, `green-text`) above titles. Keep lines under ~65 characters.

**Space and layout.** Generous. Sections pad `space-30` top and bottom on desktop, `space-20` on mobile. Content max width 1120px; text blocks max 640px, centered in the hero. Gutter `space-6` desktop, `space-4` mobile. Three-up rows collapse to one column under 760px.

**Shape.** Rounded but not bubbly: buttons `radius-md`, cards `radius-lg`, badges `radius-pill`. Cards use a 1px `line` border on `surface`; `shadow-card` is kept for screenshot frames, where it suggests a real page.

**States.** Hover: buttons lift to `brand-navy-deep` (light) or brighten 8% (dark). Focus: a solid 2px `focus` ring offset 2px — never removed. Motion: 150–200ms ease-out, nothing bouncy; respect reduced motion.

**Imagery.** Screenshots are drawn as simplified page wireframes inside browser frames (soft gray blocks), never stock photos. The before/after comparison always shows the same page twice, labelled "Before" and "After", with the `pass` badge on the result.

## Iconography

Simple 2px-stroke line icons with round caps and joins, in `ink` or `green-text`, 20–24px. Core set: check, refresh arrow, copy (staging), camera (screenshots), rocket-free "go live" (an up arrow into a line), stack of windows (many sites). Draw them inline as SVG with `stroke="currentColor"`. No emoji, no filled multicolor icons.
