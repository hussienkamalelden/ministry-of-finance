import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container p-5" dir="rtl">
      <a routerLink="/dashboard" class="govsa-link mb-3 d-inline-block">&rarr; العودة للوحة التفاعلية</a>
      <div class="govsa-card mt-3">
        <h3>الإيرادات</h3>
        <p>يعرض هذا القسم تفاصيل الإيرادات العامة للدولة ومصادرها المختلفة.</p>
      </div>
    </div>
  `,
})
export class RevenuesComponent {}
