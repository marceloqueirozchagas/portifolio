# Marcelo Queiroz — Portfolio

A bilingual personal website built with Angular 22.2.3, standalone components, strict TypeScript, SCSS, and static prerendering. Portuguese lives at `/`; English lives at `/en/`.

## Local development

Use Node 24.15.0 and npm 11.12.1 (see `.nvmrc`).

```sh
npm ci
npm start
```

## Build and review

```sh
npm test
npm run build
npm run test:e2e
npm run preview
```

Open http://127.0.0.1:4173/ or http://127.0.0.1:4173/en/. Preview serves the exact production artifact with real directory routes and 404 responses, without an SPA fallback. Browser tests use installed Google Chrome. Install Chrome if it is unavailable, or adapt the Playwright channel to your installed browser.

`dist/portifolio/browser` is the only publishable directory. No Node server, API key, or database is required in production. Fonts are self-hosted under `public/fonts` alongside their OFL licenses, sourced from the pinned Fontsource packages.

## Content

- `src/app/content/portfolio-content.ts`: typed Portuguese and English copy, employment, projects, and public contact URLs.
- `src/app/portfolio-utils.ts`: experience calculation and recognized section hashes.
- `src/styles.scss`: layout, typography, tokens, and responsive rules.
- `public/images`: original decorative project illustrations (not screenshots), plus the social card.

Experience is calculated from **October 2011**, using completed calendar years and the UTC month. No precise start day was supplied. The static build supplies a readable initial value; TransferState preserves hydration consistency, then the browser recalculates on opening, returning to the tab, and hourly. Visitors without JavaScript see the build-time count and the permanent start date.

Both languages must keep matching translation keys. Roles and date ranges are localized display content; company names and technology names remain proper nouns. The Streetwire responsibilities summarize work on portals/APIs, integrations, access control, geographic visualizations, SQL, and Python reports. No private report data, internal links, or business metrics are published.

## Publication

**Preview approval is required before publishing this redesign.** Development and builds do not deploy. There is no automatic production workflow on this feature branch.

The existing GitHub Pages configuration publishes the root of `gh-pages`, with `marceloqueiroz.dev.br` as its custom domain. After approval, validate the build and run `npm run deploy` from the repository. This explicit command replaces the published artifact through `angular-cli-ghpages`; do not run it as part of tests or preview.

See [deployment and recovery](docs/redesign/deployment.md), [implementation tasks](docs/redesign/tasks.md), and [validation evidence](docs/redesign/validation.md).
