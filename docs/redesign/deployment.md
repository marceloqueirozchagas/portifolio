# Portfolio Deployment and Recovery

## Observed state on October 15, 2026

| Item | Evidence |
| --- | --- |
| Repository | https://github.com/marceloqueirozchagas/portifolio |
| Primary branch | master |
| Inspected source commit | 8a7139c063efc1e450ecd255da1106cf123629bd |
| GitHub Pages | Authenticated Pages API: built, legacy publishing, source gh-pages at / |
| Published artifact branch | gh-pages |
| Inspected artifact commit | 83ccfe370061b492030479a9764ca2009f3cec43 |
| Domain | https://marceloqueiroz.dev.br/ |
| CNAME on gh-pages | marceloqueiroz.dev.br |
| Published HTML base | / |
| HTTP header | Server: GitHub.com |
| DNS A records | 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153 |
| Deployment builder | angular-cli-ghpages:deploy |
| Configured deployment base | /portifolio/ |
| Configured output | dist/project-name, with empty browser subdirectory |
| Source workflows | No .github/workflows directory found on master |

The public HTML references the same main-YOAGJGJB.js, polyfills-6EAL64PA.js, and styles-5INURTSO.css files found on gh-pages. This connects the observed live content to those artifacts. The authenticated Pages API confirms `source.branch: gh-pages`, `source.path: /`, and `build_type: legacy`. A push of the artifact to gh-pages triggers Pages publication. Absence of a source workflow does not imply absence of GitHub Pages' internal deployment process.

## Contract to preserve

- Keep the repository, history, domain, and GitHub Pages hosting.
- Publish static files without a backend/application server.
- Keep Portuguese at / with root base href /.
- Add English at /en/, backed by en/index.html. Direct entry must not depend on JavaScript redirects or SPA 404 fallback.
- Retain CNAME and .nojekyll at the artifact root.
- Ensure shared or locale-specific assets resolve correctly from both language URLs.
- Feature branches and previews must not accidentally replace production.

Correct the legacy /portifolio/ base for the custom domain. A preview under a project subdirectory needs separate configuration; do not mix production canonical URLs with incorrect asset paths.

## Local development and remote publication

Implementation runs locally in E:\projetos\portifolio. Code, tests, builds, and previews run there. Commits are pushed to a feature branch of the same GitHub repository for review. Production publication is a distinct step through the verified integration.

Implementation lives on local branch `feature/bilingual-portfolio`. No branch has been pushed and no production change has been made. The custom domain setting is unchanged. The Pages API reports `https_enforced: false`; HTTPS currently responds successfully. No remote setting was changed.

## Pre-release checks

1. Inspect effective Pages settings and record source branch/directory and publishing mechanism.
2. Revalidate current SHAs; the table is a research snapshot.
3. Identify the actual command/integration, including options passed outside angular.json.
4. Confirm publisher compatibility with Angular; adapt minimally while preserving the destination.
5. Run clean installation, checks, and the bilingual production build.
6. Serve the exact artifact locally; open and refresh / and /en/ and test direct section links.
7. Inspect CNAME, .nojekyll, base, localized canonical/hreflang/Open Graph metadata, sitemap, robots, and social images.
8. Check section-preserving language switching.
9. Record evidence and present the final preview before publication.

## Publication

Publish only the validated artifact through the confirmed mechanism. Do not assume merging into master deploys automatically.

After deployment, verify HTTP responses, HTTPS, domain, both languages, fonts/images/JS/CSS, navigation, and metadata. Record build source and deployment identifier. Consider GitHub Pages caching when distinguishing propagation delay from failure.

## Recovery

Before the new release, preserve the current production artifact and full commit identifiers. Research SHAs do not replace the immediate pre-release check.

If a regression occurs, republish the validated previous artifact using the same mechanism and retain CNAME. For branch publication, prefer a new commit restoring the old files; do not force-push or rewrite history. Remove newly introduced /en/ files when restoring a release that did not contain that route to avoid a mixed release. Recheck the domain and assets afterward.

Frontend recovery does not require DNS changes or repository deletion.

## Validated implementation contract

Angular 22.2.3 produces `dist/portifolio/browser/index.html` and `dist/portifolio/browser/en/index.html`, both with base `/`. The artifact also includes `CNAME`, `.nojekyll`, a genuine bilingual `404.html`, local fonts and licenses, illustrations, social image, robots and sitemap.

```sh
npm ci
npm test
npm run build
npm run test:e2e
npm run preview
```

The explicit publisher is pinned to angular-cli-ghpages 3.1.2. The configured command uses `--dir=dist/portifolio/browser --cname=marceloqueiroz.dev.br --no-silent --no-notfound`. The final flag preserves the supplied 404 instead of replacing it with the Portuguese homepage. Dotfiles are included by default. This CLI command operates on static output independently of the Angular builder.

Run `npm run deploy -- --dry-run` to inspect the destination without publishing. Only after preview approval, use `npm run deploy` to update the existing gh-pages branch. A source branch commit or merge does not invoke this command.

The previous production artifact is preserved locally in ignored `.local/previous-production.zip`, generated from commit `83ccfe370061b492030479a9764ca2009f3cec43`. Git also retains that commit. Before releasing, fetch gh-pages, compare its SHA, and refresh the archive if production has changed. To recover, extract the saved artifact into a dedicated temporary directory and publish that directory through the same publisher with `--no-notfound`. Verify CNAME and remove new-only files as part of replacement; do not force-push history or change DNS.

Dependency audit note: npm currently reports six high-severity development-tool findings in the angular-cli-ghpages → gh-pages → globby → fast-glob → micromatch → braces chain (GHSA-vfj7-8cjw-p6xm). This is a nested-pattern denial of service in publishing tooling, not JavaScript shipped to visitors. No user-controlled patterns are passed to that tooling. Do not run `npm audit fix --force`: its proposed downgrade also changes publisher compatibility. Reassess the advisory and publisher before the production release; no publishing command without `--dry-run` has been executed.
