# Portfolio preview validation

Date: October 15, 2026. Local implementation: `E:\projetos\portifolio`, branch `feature/bilingual-portfolio`. Production has not been updated.

## Environment and commands

Windows, Node 24.15.0, npm 11.12.1, Angular/CLI 22.2.3, TypeScript 6.0.3, Playwright 1.64.1 using installed Google Chrome, Lighthouse 13.5.0. Production artifact served on 127.0.0.1:4173 with text compression, real directory routes, no SPA fallback and no-store caching for preview freshness.

| Check | Result |
| --- | --- |
| Production build | Pass; 2 prerendered routes |
| Unit tests | 3 passed |
| Browser tests | 19 passed |
| WCAG 2 A/AA and 2.1 AA axe scans | No violations on either locale, including expanded experience |
| Lighthouse mobile, Portuguese | Performance 98; accessibility 100; best practices 100; SEO 100 |
| Lighthouse mobile, English | Performance 98; accessibility 100; best practices 100; SEO 100 |
| Initial JS + CSS | 267.97 kB raw; estimated transfer 75.13 kB |
| Static artifact | Both localized HTML files, CNAME, .nojekyll, real 404, local fonts/licenses, images, robots, sitemap |

The test suite verifies direct entry and refresh, localized metadata without duplicate canonical/alternate links, same-section language switching in both directions, keyboard disclosure and skip link, current-section tracking, future-date experience recalculation, reduced motion, real 404 status, console/asset errors and no-JavaScript reading/navigation. Both locales pass overflow checks at 320, 360, 390, 768, 1024 and 1440 pixels.

The first Lighthouse run scored 89 in performance. Font preloads, limiting bundled fonts to the used Latin subset, and enabling HTTP compression in the static preview increased the final score to 98. Lighthouse also identified the monogram's accessible name mismatch; the accessible name now includes its visible `mq.` text. Final report metadata and key measurements are retained in `lighthouse-summary.json`; full local reports are ignored under `.local/`.

## Manual review evidence

- [Portuguese desktop](screenshots/portfolio-desktop-pt.jpg)
- [English desktop](screenshots/portfolio-desktop-en.jpg)
- [Portuguese mobile](screenshots/portfolio-mobile-pt.jpg)
- [English mobile](screenshots/portfolio-mobile-en.jpg)
- [Streetwire responsibilities](screenshots/portfolio-experience-pt.jpg)

Reviewed typography, hierarchy, contrast, layout, both language labels and the updated employment copy in the app browser. Desktop screenshots use the viewport because full-page capture distorts sticky positioning. Project covers are conceptual illustrations, not screenshots.

## Limits and release follow-up

- The final visual/content approval belongs to Marcelo. No production publishing, remote push or pull request occurred.
- The user supplied the correct PGTA destination, https://calculadoraindigena.com.br/, during preview review; its link is now active. Magma has no resolvable host in this environment and remains labeled Demo unavailable / Demonstração indisponível. Invoice Generator responds with HTTP 200.
- Full npm audit currently flags six related high-severity findings in the development publisher dependency chain. See deployment.md. These packages are not shipped in the static browser bundle.
- Lighthouse scores are local simulated-mobile measurements, not real-user field data or a guarantee for every device. Preview uses no-store headers and cannot reproduce GitHub Pages caching exactly.
- Chromium is automated. Safari/Firefox, screen-reader output and browser-specific 200% toolbar zoom were not separately tested; narrow viewport reflow and native keyboard behavior were checked.
- Without JavaScript, the numeric experience count reflects the last build. The career timeline retains the October 2011 start date. With JavaScript it updates after hydration, on tab visibility changes, and hourly.

## Final reproducibility checks

- npm ci: passed from the committed dependency inputs.
- Production build after clean installation: passed with the same bundle hashes.
- Publisher dry-run: passed, confirming origin repository, gh-pages branch, browser output directory, dotfiles and custom domain; upload explicitly skipped.
- npm audit --omit=dev: zero vulnerabilities.
- Full audit: the six publisher-chain development findings described above remain.

