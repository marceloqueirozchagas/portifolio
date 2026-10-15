import { Component, input } from '@angular/core';
import { languageHref, Locale } from './portfolio-utils';
@Component({
  selector: 'app-language-switcher',
  template: `<nav class="language-switcher" [attr.aria-label]="label()">
    <a
      [href]="href('pt-BR', hash())"
      lang="pt-BR"
      hreflang="pt-BR"
      [attr.aria-current]="locale() === 'pt-BR' ? 'page' : null"
      >Português</a
    >
    <span aria-hidden="true">/</span>
    <a
      [href]="href('en', hash())"
      lang="en"
      hreflang="en"
      [attr.aria-current]="locale() === 'en' ? 'page' : null"
      >English</a
    >
  </nav>`,
})
export class LanguageSwitcher {
  readonly locale = input.required<Locale>();
  readonly label = input.required<string>();
  readonly hash = input('');
  protected readonly href = languageHref;
}
