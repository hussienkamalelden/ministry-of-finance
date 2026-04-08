import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-economic-indicators',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container p-5" dir="rtl">
      <a routerLink="/dashboard" class="govsa-link mb-3 d-inline-block">&rarr; العودة للوحة التفاعلية</a>
      <div class="govsa-card mt-3">
        <h3>المؤشرات الاقتصادية</h3>
        <p>يعرض هذا القسم أهم المؤشرات الاقتصادية المتعلقة بأداء المملكة.</p>
      </div>
    </div>
  `,
})
export class EconomicIndicatorsComponent {}
