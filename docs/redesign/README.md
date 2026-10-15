# Marcelo Queiroz Portfolio Redesign

Rebuild the personal website in the existing repository using the approved layout, concise bilingual copy, and current stable Angular. Preserve marceloqueiroz.dev.br and the existing GitHub Pages integration.

Planning date: October 15, 2026. The visual direction and implementation plan are approved. The implementation was approved, published and verified on October 15, 2026. See [release evidence](release-2026-10-15.md).

## Documents

- [Features and tasks](tasks.md): dependencies, acceptance criteria, and evidence.
- [Design and content](design-content.md): appearance, interactions, and localized copy.
- [Deployment and recovery](deployment.md): hosting evidence and release procedure.
- [Approved mockup](reference/approved-layout.html): original Portuguese design fragment preserved from the conversation. It depends on the visualization environment for icons and auxiliary controls; it is not the Angular application.

## Development location and workflow

Develop and test locally in E:\projetos\portifolio, a clone of marceloqueirozchagas/portifolio. Implementation and the approved documentation live on local branch `feature/bilingual-portfolio`. The separate older checkout at `E:\projetos\marcelo-webpage\portifolio` was preserved untouched.

GitHub stores commits, supports review, and hosts the publication integration. Local coding does not update GitHub or the live website. Delivery proceeds through local changes, validation, commits, branch push and pull request, review, and publication through the verified mechanism. Do not assume merging into master automatically deploys.

## Language and naming conventions

- Write plans, documentation, task descriptions, comments, test descriptions, commit messages, and pull request descriptions in English.
- Use English file/directory names, preferably kebab-case where framework conventions allow.
- Use English identifiers for components, classes, functions, variables, interfaces, and translation keys, following TypeScript casing conventions.
- Examples: language-switcher, portfolio-content.ts, ProjectSummary, selectedLocale, contact.sendEmail.
- Keep Portuguese and English display strings in explicit locale resources, separate from application logic. Portuguese strings in localization resources are intentional.
- Preserve proper names, external URLs, the existing portifolio repository name, and compatibility-sensitive identifiers.
- Preserve the original approved mockup as a historical reference, not production code.

## Scope

A public portfolio in Brazilian Portuguese and English: introduction, about, three selected projects, experience, and contact. Desktop uses two columns with identity on the left and content on the right; mobile uses one column. Keep the dark navy theme, green accents, Manrope/DM Sans typography, section navigation, and expandable earlier experience.

Add a compact Português / English selector with an accessible active-language indication. Portuguese remains at /; English is available at /en/. Both URLs must load and refresh directly on GitHub Pages. Switching preserves a valid current section hash. The URL is the source of truth; no automatic language redirects or online translation service are required.

Out of scope: Python backend, Supabase, administration panel, login, learning journal, automations, blog, and server-submitted contact forms. Contact uses email and professional links. This supersedes the earlier backend proposal.

## Implementation approach

Preserve the repository, Git history, master branch, domain, and publication destination. Rebuild the small frontend using a clean Angular CLI baseline on a feature branch. Replace the old theme instead of retaining jQuery, Bootstrap, and Owl Carousel.

Angular 22 is the active release line at the research date. Confirm and pin the exact stable Angular/CLI release and compatible Node/TypeScript versions during foundation work. Do not use preview releases or merely change package version numbers in the old configuration.

Use standalone components, strict TypeScript, SCSS with project-specific tokens, and typed local content. Suggested components: introduction/navigation, language switcher, about, projects, experience, and contact. A global state library is unnecessary.

Use one application and shared templates with typed locale dictionaries selected by route. Validate translation-key parity. Prerender / and /en/ using outputMode: static, producing index.html and en/index.html with localized content and metadata. No Node server runs in production, and project cards do not depend on the GitHub API.

Preserve section identifiers home, about, projects, and experience; add contact. Use the same English identifiers in both languages to retain existing links and support section-preserving language switching.

## Delivery sequence

1. Verify the publishing contract and record a recoverable production version.
2. Prepare the Angular baseline and both static language URLs.
3. Implement responsive layout, navigation, and language selection.
4. Finalize bilingual copy, images, accessibility, and metadata.
5. Validate the preview and publish through the existing compatible integration.

Each task records changed files, acceptance results, checks, and remaining issues. Planning, implementation, and production release have independent statuses.

## Definition of done

- Preserve the approved composition with justified accessibility and responsive adjustments.
- Check both languages at 360, 390, 768, 1024, and 1440 pixels; also check 320 pixels and 200% zoom.
- Essential localized content exists in generated HTML and is readable without JavaScript.
- Navigation, language switching, expansion, and contact links are keyboard accessible.
- No missing translations, hydration errors, application errors, or local asset failures.
- Reproducible production build and meaningful behavioral checks pass.
- Preserve the existing domain, CNAME, HTTPS, and publishing destination.
- Record previous release identifiers and the recovery procedure.

## Technical references

- [Angular releases](https://angular.dev/reference/releases)
- [Version compatibility](https://angular.dev/reference/versions)
- [Internationalization concepts](https://angular.dev/guide/i18n)
- [Static generation](https://angular.dev/guide/ssr#generate-a-fully-static-application)

Angular/CLI 22.2.3 and the authenticated GitHub Pages configuration were verified during implementation. Recheck production SHAs immediately before release.
