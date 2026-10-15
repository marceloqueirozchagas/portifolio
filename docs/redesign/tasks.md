# Portfolio Redesign Features and Tasks

Tasks T01–T11 are complete, with the validation limits recorded below. The user approved the preview and publication on October 15, 2026; the deployed release is verified. The visual direction and implementation plan are approved. Follow the English documentation, naming, and code conventions in the [plan](README.md).

## F01 Angular Foundation and Deployment Compatibility

### T01 Record the deployment contract

Dependencies: none. Status: complete.

Inspect Pages settings or an authenticated API to identify publishing source, directory, trigger, actual command, and external integrations. Compare with [deployment evidence](deployment.md).

Acceptance criteria:

- Record actual branch/directory and trigger; do not assume a master push deploys.
- Define CNAME, root base href, and the /en/ static directory contract.
- Resolve the configured /portifolio/ versus published / discrepancy.
- Record source and production SHAs and recovery approach without changing remote settings.

Evidence: configuration report and documented build/publishing commands.

### T02 Prepare the current Angular baseline

Dependencies: T01. Status: complete.

Generate a clean baseline in a temporary work directory and incorporate necessary files into the existing repository. Preserve Git history, documentation, verified content, and reusable assets.

Acceptance criteria:

- Pin stable Angular/CLI and compatible Node/TypeScript versions with an updated lockfile.
- Configure standalone components, strict TypeScript, SCSS, and static prerendering.
- Clean installation and production build pass.
- Static output supports / and /en/ without a production Node server.
- Remove jQuery, Bootstrap, and Owl Carousel after replacing their usage; verify references before removing assets.

Evidence: version inventory, build output, and artifact inspection.

## F02 Approved Layout and Navigation

### T03 Build the responsive composition

Dependencies: T02. Status: complete.

Apply approved colors, typography, and proportions. Build identity, navigation, professional links, and sections. Reserve top space for language selection.

Acceptance criteria:

- Preserve the approved hierarchy without clipping in either language.
- Use desktop sticky positioning and mobile single-column flow; keep short screens and zoom usable.
- Validate all viewport sizes defined in the plan.
- Self-host fonts with licenses and fallbacks.
- Provide visible focus, a skip link, and adequate touch targets.

Evidence: desktop/mobile screenshots compared with the approved mockup.

### T04 Implement navigation and experience expansion

Dependencies: T03. Status: complete.

Preserve section anchors, track the active section while scrolling, and implement semantic expansion of earlier experience.

Acceptance criteria:

- home, about, projects, experience, and contact deep links work in both languages.
- Active navigation follows the visible section, not clicks alone.
- Experience expansion works by keyboard and exposes its state.
- Reduced-motion preferences are honored.
- Browser-only APIs do not break prerendering.

Evidence: keyboard review and automated navigation/expansion checks.

## F03 Bilingual Content and Projects

### T05 Centralize and review localized content

Dependencies: T02. Status: complete.

Create typed shared data and locale dictionaries with English keys. Apply the [content specification](design-content.md) and verify factual claims.

Acceptance criteria:

- Both languages cover visible text, dates, accessible labels, categories, and metadata.
- Translation keys have parity; missing translations fail validation instead of silently mixing languages.
- Review employment details before release; do not invent metrics or availability.
- No GitHub, translation, or AI API request is required to render public content.
- Document the content-editing location in English.

Evidence: bilingual review, translation-key validation, and pending factual questions.

### T06 Add the language selector and localized pages

Dependencies: T03, T04, T05. Status: complete.

Add Português / English links near the top. Render Portuguese at / and English at /en/ with shared components and route-selected content.

Acceptance criteria:

- Selector works on desktop/mobile and by keyboard, with accessible active-language indication.
- Switching preserves recognized section hashes, including /#projects to /en/#projects and back.
- Both URLs open and refresh on a plain static server without SPA fallback.
- index.html and en/index.html contain localized content and correct document languages before JavaScript execution.
- URL remains authoritative; no automatic language redirect or hydration mismatch.
- Essential language links work without JavaScript; hydrated switching preserves the current valid hash.

Evidence: generated HTML and browser tests for direct entry, refresh, switching, and hashes.

### T07 Finalize project cards and contact

Dependencies: T03, T05. Status: complete.

Show Calculadora PGTA, Invoice Generator, and Magma Engenharia in approved order. Use approved graphical covers or optimized real screenshots. Implement professional and email links.

Acceptance criteria:

- Each project has localized copy/categories, a consistent cover, and verified destination.
- Report unavailable external destinations before release.
- Distinguish illustrations from real screenshots.
- Images have explicit dimensions, appropriate alt text, compression, and deferred loading where appropriate.
- Contact uses mailto, without a simulated submission form.

Evidence: visual review in both languages and destination checks.

## F04 Quality and Discoverability

### T08 Prepare localized SEO and sharing metadata

Dependencies: T06, T07. Status: complete.

Configure document language, localized titles/descriptions, canonical URLs, Open Graph, favicon, social images, robots.txt, and sitemap.xml. Add reciprocal language alternates and x-default pointing to the Portuguese root.

Acceptance criteria:

- One primary heading and coherent hierarchy per page.
- Content and metadata are present in generated HTML without JavaScript.
- Each URL has its own canonical and matching reciprocal language alternates.
- Sitemap lists both public URLs and no nonexistent pages.
- Social images resolve and structured data uses only verified facts.

Evidence: inspection of both generated documents and discovery files.

### T09 Validate behavior, accessibility, and performance

Dependencies: T04, T06, T07, T08. Status: complete.

Test the production build on a static server, including navigation, languages, expansion, content, accessibility, and responsiveness.

Acceptance criteria:

- Meaningful behavioral checks pass; obsolete broken scaffold tests are replaced.
- No critical/serious automated accessibility findings or manual keyboard/focus/contrast blockers.
- No missing translations, hydration errors, application errors, or local asset 404s.
- Measure mobile Lighthouse: targets of 90 performance and 95 accessibility/SEO; record environment/results and investigate deviations.
- Optimize images, fonts, and bundles where measurements show a problem.

Evidence: test reports, accessibility review, Lighthouse results, and final screenshots in both languages.

## F05 Release Through Existing GitHub Pages Integration

### T10 Prepare delivery and recovery

Dependencies: T01, T09. Status: complete.

Update the README in English with setup, localized content editing, tests, build, and deployment. Adapt the existing publisher minimally if required by the new output.

Acceptance criteria:

- Artifact contains CNAME, .nojekyll, both localized HTML documents, and correctly addressed assets.
- Production uses base /; assets and links resolve from /en/ too.
- Build is reproducible from the lockfile.
- Final preview, recovery procedure, and previous release identifiers are ready.
- Credentials are excluded and PR validation does not publish production.
- A reviewable branch/PR documents the change in English.

Evidence: artifact inspection and reproducible instructions.

### T11 Publish and verify the domain

Dependencies: T10 and authorization to publish the completed preview. Status: complete; published and verified on October 15, 2026.

Publish the validated artifact through the verified integration. Check both languages on the real domain and use the recovery procedure if needed.

Acceptance criteria:

- Existing domain, HTTPS, repository, and GitHub Pages hosting are retained.
- Both / and /en/ load directly on desktop/mobile.
- Selector, section links, CNAME, metadata, and assets work online.
- Record source SHA, deployment identifier, and verification results.

Evidence: public URLs, release identifiers, and live screenshots.

## Execution log

Record date, status, changed files, checks, acceptance results, and remaining issues in English for each completed task. Planning, implementation, and publication have independent statuses.

### October 15, 2026 — T01–T02

Confirmed authenticated Pages source `gh-pages:/`, legacy trigger, domain and SHAs. Preserved the previous artifact. Created `feature/bilingual-portfolio` in the clean clone at `E:\projetos\portifolio`; preserved the separate dirty legacy checkout. Migrated to Angular/CLI 22.2.3, TypeScript 6.0.3 and Node 24.15.0 with strict standalone components and two prerendered routes. Removed legacy checked-in output, jQuery/Bootstrap/Owl assets, Karma and obsolete configuration. Lockfile installation and production output are checked in the validation report.

### October 15, 2026 — T03–T04

Implemented the approved navy/mint layout, Manrope/DM Sans local fonts and OFL licenses, sticky desktop identity, single-column mobile layout, visible focus, skip link, active scroll navigation, reduced-motion rules and native keyboard-accessible details. Screenshots are in `screenshots/`. Both languages were tested at 320, 360, 390, 768, 1024 and 1440 CSS pixels. Browser-specific 200% toolbar zoom is not automated; the narrower reflow checks cover equivalent effective widths.

### October 15, 2026 — T05–T07

Centralized typed bilingual content and shared factual data. User confirmed Streetwire since July 2020 and the senior software developer introduction. Added the requested automatic experience calculation from October 2011, with an anniversary boundary test and browser validation against a simulated future date. Updated Streetwire responsibilities from the user's available professional work context. Preserved section hashes and directory URL trailing slashes. No translation/data API is used. Added original decorative SVG covers and public contact links.

External checks: Invoice Generator returned HTTP 200; PGTA returned HTTP 404 and Magma failed DNS resolution. Their historical cards remain, with localized unavailable labels and no broken active links. Their URLs remain in source data for future maintenance. This content treatment is visible for user review.

### October 15, 2026 — T08–T09

Added static localized document language, titles, descriptions, canonical, reciprocal hreflang, x-default and Open Graph tags, favicon, PNG social card, robots and sitemap. Fixed duplicate head links after hydration and Angular normalization of `/en/`. Passed 3 unit checks and 19 Chromium browser checks, including language switching, direct entry, refresh, no-JavaScript content, keyboard disclosure, skip link, responsive overflow, reduced motion, no local asset errors and accessibility scans. Final Lighthouse mobile: 98 performance, 100 accessibility, 100 best practices and 100 SEO in each language. See `validation.md` for environment and limits.

### October 15, 2026 — T10–T11

Documented setup, content maintenance, static preview, explicit publishing and recovery in English. The reviewable local feature branch contains the implementation and screenshots. The deploy command preserves the genuine 404, domain and .nojekyll. The previous production archive is ignored, as are generated output and test reports. Known publisher dependency advisories are documented in deployment.md. Production remains unchanged; T11 awaits the user's review and explicit authorization. No PR or remote source branch has been created in this preview stage.

### October 15, 2026 — Preview review, comments 1–3

Changed the visible monogram to MQ in the header/footer and SVG favicon, with a matching accessible name. Replaced the start-date highlight with "Dev com {years} anos de experiência" / "Developer with {years} years of experience", using the existing October 2011 calculation in both locales. Restored the PGTA project link using the user-confirmed https://calculadoraindigena.com.br/ destination; the obsolete URL's 404 does not apply to this corrected destination. Publication remains pending preview approval.

Validation: production build passed; both localized entry/accessibility checks and the future-date calculation check passed (3 selected browser tests). The refreshed Portuguese preview shows MQ, the calculated highlight and the active corrected PGTA link. No publishing command was run.


### October 15, 2026 — T11 production publication completed

After explicit user approval, saved the source branch on GitHub and published the approved artifact through the existing gh-pages integration. Pages build `6017c120c6f1f0cadd5b748d9350865497eb36f8` completed successfully at 17:04:35 America/Cuiaba. Both public language URLs and all 18 checked artifact files responded successfully over HTTPS. Verified real-domain desktop/mobile rendering, direct English refresh and section-preserving language switching. The domain and previous release were retained. See [release evidence](release-2026-10-15.md) for SHAs, screenshots, checks and recovery details. Earlier execution entries describe the state at their respective stages and are superseded by this release record.
