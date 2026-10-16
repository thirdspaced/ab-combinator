# AB Combinator site

Astro, two pages, no framework. Fraunces + DM Sans from Google Fonts.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploy (GitHub Pages)

Push to `main` and `.github/workflows/deploy.yml` builds and publishes the site. One-time setup in the repo: Settings > Pages > Source: **GitHub Actions**.

- Without a custom domain the site lives at `https://thirdspaced.github.io/ab-combinator/` and the workflow sets the base path for you.
- To use a custom domain, add a file `public/CNAME` containing just the domain (e.g. `abcombinator.com`), point the domain's DNS at GitHub Pages, and push. The workflow switches to root paths automatically.

## Things to swap before launch

1. **Tally forms.** Open `src/site.config.ts` and fill in `TALLY_PARENT` and `TALLY_KID` with your Tally form IDs (tally.so > form > Share > Embed, the ID is the bit after `tally.so/embed/`). The placeholder boxes turn into live embedded forms. The two form specs are in `docs/tally-forms.md`.
2. **Photos.** Every `.img-slot` is a dashed placeholder. Drop images into `public/images/` and replace the `<span class="label">` inside a slot with `<img src="/images/your-file.jpg" alt="...">`. Kid hands and blurred work only, never faces or names.
3. **Social links.** `src/site.config.ts`, the `SOCIALS` object. Empty ones are hidden.
4. **Cohort status.** The `cohort_status.txt` window on the home page and the dates in the footer are hand-typed. Update them as cohorts open and close.
5. **Age bands.** Set to 6 to 8, 9 to 11, 12 to 14 in both pages. Search for `6 to 8` if that changes.

## Where things live

- `src/styles/global.css`: palette, type, buttons, window chrome, splashes, ticker, reveal animations.
- `src/layouts/Base.astro`: head, fonts, nav, footer, waitlist window, scroll-reveal script.
- `src/components/WaitlistWindow.astro`: the download-bar waitlist modal. Any `[data-open-waitlist]` button opens it. `/#waitlist` deep-links to it.
- `src/pages/index.astro`: home.
- `src/pages/about.astro`: beliefs, what it is, FAQ, bio.

## Palette

| Token | Hex |
| --- | --- |
| White (base) | `#FFFFFF` |
| Tint (alt sections, cards) | `#F3F2FF` |
| Ink (text, borders) | `#111111` |
| Ultramarine (bands, chrome, italic accent) | `#1E22C9` |
| Orange (headlines) | `#FF942E` |
| Pink (splash) | `#FF7AC6` |
| Yellow (splash) | `#FFE24A` |
