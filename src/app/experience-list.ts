import { Component, input } from '@angular/core';
import { experiences, ExperienceCopy } from './content/portfolio-content';
@Component({
  selector: 'app-experience-entry',
  template: ` <article class="experience-entry">
    <p class="experience-date">{{ copy().period }}</p>
    <div>
      <h3>{{ company() }}</h3>
      <p class="experience-role">{{ copy().role }}</p>
      <p>{{ copy().description }}</p>
      <ul class="technology-list">
        @for (technology of technologies(); track technology) {
          <li>{{ technology }}</li>
        }
      </ul>
    </div>
  </article>`,
})
export class ExperienceEntry {
  readonly company = input.required<string>();
  readonly copy = input.required<ExperienceCopy>();
  readonly technologies = input.required<readonly string[]>();
}
@Component({
  selector: 'app-experience-list',
  imports: [ExperienceEntry],
  template: ` @for (
      experience of experiences.slice(0, 2);
      track experience.company;
      let index = $index
    ) {
      <app-experience-entry
        [company]="experience.company"
        [copy]="copy()[index]"
        [technologies]="experience.technologies"
      />
    }
    <details class="earlier-experience">
      <summary>{{ earlierLabel() }} <span aria-hidden="true">+</span></summary>
      @for (experience of experiences.slice(2); track experience.company; let index = $index) {
        <app-experience-entry
          [company]="experience.company"
          [copy]="copy()[index + 2]"
          [technologies]="experience.technologies"
        />
      }
    </details>`,
})
export class ExperienceList {
  readonly copy = input.required<readonly ExperienceCopy[]>();
  readonly earlierLabel = input.required<string>();
  protected readonly experiences = experiences;
}
