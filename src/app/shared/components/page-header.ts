import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="page-header">
      <h1>{{ title() }}</h1>
      @if (subtitle()) {
        <p>{{ subtitle() }}</p>
      }
    </div>
  `,
  styles: [`
    .page-header { margin-bottom: 24px; }
    h1 {
      font-size: 24px;
      font-weight: 700;
      color: var(--color-text-primary);
    }
    p {
      color: var(--color-text-secondary);
      margin-top: 4px;
      font-size: 14px;
    }
  `],
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
