import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  DestroyRef,
  inject,
  makeStateKey,
  signal,
  TransferState,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { portfolioContent, profile } from './content/portfolio-content';
import { ExperienceList } from './experience-list';
import { LanguageSwitcher } from './language-switcher';
import { ProjectList } from './project-list';
import { getExperienceYears, Locale } from './portfolio-utils';

const yearsKey = makeStateKey<number>('experience-years');
@Component({
  selector: 'app-portfolio-page',
  imports: [LanguageSwitcher, ProjectList, ExperienceList],
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly state = inject(TransferState);
  readonly locale = inject(ActivatedRoute).snapshot.data['locale'] as Locale;
  readonly copy = portfolioContent[this.locale];
  readonly basePath = this.locale === 'en' ? '/en/' : '/';
  readonly profile = profile;
  readonly sections = ['about', 'projects', 'experience', 'contact'] as const;
  readonly activeSection = signal<string>('about');
  readonly currentHash = signal('');
  readonly years = signal(this.state.get(yearsKey, getExperienceYears(new Date())));

  constructor() {
    this.state.set(yearsKey, this.years());
    this.setMetadata();
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window) return;
      // Update only after hydration so a cached static page cannot cause a mismatch.
      const refreshYears = () => this.years.set(getExperienceYears(new Date()));
      refreshYears();
      const updateHash = () => this.currentHash.set(window.location.hash);
      updateHash();
      let pending = false;
      let frame = 0;
      const updateSection = () => {
        let visible: string = 'about';
        for (const id of this.sections) {
          const top = this.document.getElementById(id)?.getBoundingClientRect().top;
          if (top !== undefined && top < window.innerHeight * 0.38) visible = id;
        }
        if (window.scrollY + window.innerHeight >= this.document.documentElement.scrollHeight - 8)
          visible = 'contact';
        this.activeSection.set(visible);
        pending = false;
      };
      const scheduleSection = () => {
        if (!pending) {
          pending = true;
          frame = window.requestAnimationFrame(updateSection);
        }
      };
      updateSection();
      window.addEventListener('hashchange', updateHash);
      window.addEventListener('scroll', scheduleSection, { passive: true });
      window.addEventListener('resize', scheduleSection);
      this.document.addEventListener('visibilitychange', refreshYears);
      const interval = window.setInterval(refreshYears, 60 * 60 * 1000);
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('hashchange', updateHash);
        window.removeEventListener('scroll', scheduleSection);
        window.removeEventListener('resize', scheduleSection);
        this.document.removeEventListener('visibilitychange', refreshYears);
        window.clearInterval(interval);
        window.cancelAnimationFrame(frame);
      });
    });
  }

  private setMetadata(): void {
    const origin = 'https://marceloqueiroz.dev.br';
    const url = `${origin}${this.locale === 'en' ? '/en/' : '/'}`;
    this.document.documentElement.lang = this.locale;
    inject(Title).setTitle(this.copy.pageTitle);
    const meta = inject(Meta);
    meta.updateTag({ name: 'description', content: this.copy.pageDescription });
    for (const [property, content] of Object.entries({
      'og:type': 'website',
      'og:site_name': 'Marcelo Queiroz',
      'og:title': this.copy.pageTitle,
      'og:description': this.copy.pageDescription,
      'og:url': url,
      'og:locale': this.locale === 'en' ? 'en_US' : 'pt_BR',
      'og:locale:alternate': this.locale === 'en' ? 'pt_BR' : 'en_US',
      'og:image': `${origin}/images/social-card.png`,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': 'Marcelo Queiroz · C# / Python / SQL / Angular / React',
    }))
      meta.updateTag({ property, content });
    meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    const link = (rel: string, href: string, language?: string) => {
      const selector = language
        ? `link[rel="${rel}"][hreflang="${language}"]`
        : `link[rel="${rel}"]`;
      const element =
        this.document.querySelector<HTMLLinkElement>(selector) ??
        this.document.createElement('link');
      element.rel = rel;
      element.href = href;
      if (language) element.hreflang = language;
      this.document.head.appendChild(element);
    };
    link('canonical', url);
    link('alternate', `${origin}/`, 'pt-BR');
    link('alternate', `${origin}/en/`, 'en');
    link('alternate', `${origin}/`, 'x-default');
  }
}
