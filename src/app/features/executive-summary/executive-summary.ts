import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-executive-summary',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container p-5" dir="rtl">
      <a routerLink="/dashboard" class="govsa-link mb-3 d-inline-block">&rarr; العودة للوحة التفاعلية</a>
      <div class="govsa-card mt-3">
        <h3>الملخص التنفيذي</h3>
        <p>يعرض هذا القسم ملخصاً شاملاً لأداء الميزانية العامة للدولة.</p>
      </div>
    </div>
  `,
})
export class ExecutiveSummaryComponent {}
