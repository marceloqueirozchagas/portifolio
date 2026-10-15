import { Component, input } from '@angular/core';
import { projects, ProjectCopy } from './content/portfolio-content';
@Component({
  selector: 'app-project-list',
  template: ` <ul class="project-list">
    @for (project of projects; track project.id; let index = $index) {
      <li>
        <article class="project-card">
          <img
            [src]="project.cover"
            width="120"
            height="94"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <div class="project-copy">
            <h3>
              @if (project.available) {
                <a [href]="project.url"
                  >{{ copy()[index].name }} <span aria-hidden="true">↗</span></a
                >
              } @else {
                {{ copy()[index].name }}
              }
            </h3>
            <p>{{ copy()[index].description }}</p>
            <div class="tags">
              @for (tag of copy()[index].tags; track tag) {
                <span>{{ tag }}</span>
              }
            </div>
            @if (!project.available) {
              <p class="project-status">{{ unavailableLabel() }}</p>
            }
          </div>
        </article>
      </li>
    }
  </ul>`,
})
export class ProjectList {
  readonly copy = input.required<readonly ProjectCopy[]>();
  readonly unavailableLabel = input.required<string>();
  protected readonly projects = projects;
}
