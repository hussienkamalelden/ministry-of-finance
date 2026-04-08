import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-text-primary">{{ title() }}</h1>
      @if (subtitle()) {
        <p class="text-text-secondary mt-1">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
