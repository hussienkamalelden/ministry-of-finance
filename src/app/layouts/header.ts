import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="d-flex justify-content-between px-3" dir="rtl">
      <div>
        <a href="#" class="govsa-link">البيانات المفتوحة</a> |
        <a href="#" class="govsa-link">الأرقام الدولية</a> |
        <a href="#" class="govsa-link">تواصل معنا</a>
      </div>
      <div>
        <a href="#" class="govsa-link">EN</a> |
        <a href="#" class="govsa-link">18/10/1447 - 12:02 م</a>
      </div>
    </div>
    <header class="govsa-header" dir="rtl">
      <nav class="govsa-header__navigation-m" role="navigation">
        <div class="govsa-header__navigation">
          <button class="govsa-header__navigation__button"
            [class.active]="menuOpen()"
            (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul class="govsa-header__navigation__menu" [class.d-block]="menuOpen()">
            <li class="govsa-header__navigation__menu-item">
              <a href="#">عن الوزارة</a>
            </li>
            <li class="govsa-header__navigation__menu-item">
              <a href="#">ميزانية الدولة</a>
            </li>
            <li class="govsa-header__navigation__menu-item">
              <a href="#">المركز الإعلامي</a>
            </li>
            <li class="govsa-header__navigation__menu-item">
              <a href="#">الخدمات الإلكترونية</a>
            </li>
            <li class="govsa-header__navigation__menu-item">
              <a href="#">مركز المعرفة</a>
            </li>
            <li class="govsa-header__navigation__menu-item">
              <a href="#">تسجيل الدخول</a>
            </li>
          </ul>
        </div>
        @if (menuOpen()) {
          <div class="full-screen" (click)="closeMenu()"></div>
        }
      </nav>

      <a class="govsa-header__logo" href="#">
        <img src="assets/images/logo.png" height="55" alt="وزارة المالية">
      </a>

      <nav class="govsa-header__navigation-d navbar-expand-lg" role="navigation">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">عن الوزارة</a>
            <div class="govsa-tabs--border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ميزانية الدولة</a>
            <div class="govsa-tabs--border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">المركز الإعلامي</a>
            <div class="govsa-tabs--border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">الخدمات الإلكترونية</a>
            <div class="govsa-tabs--border"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">مركز المعرفة</a>
            <div class="govsa-tabs--border"></div>
          </li>
        </ul>
      </nav>

      <div class="govsa-header__avatar">
        <i class="govsa--user"></i>
      </div>

      <div class="govsa-header__search__container">
        <button class="govsa-header__search-button" type="button">
          <i class="govsa--zoom"></i>
        </button>
        <div class="govsa-header__search__input-group">
          <input type="text" class="govsa-header__search-input govsa-input" placeholder="بحث">
          <button class="govsa-header__search-clear d-none">
            <i class="govsa--close"></i>
          </button>
        </div>
      </div>

      <a href="#" class="govsa-header__vison-2030">
        <img src="govsa-ds/images/vision-2030-white.svg" width="68" alt="رؤية 2030">
      </a>
    </header>
  `,
  styles: [`
    :host .govsa-header__navigation__menu.d-block {
      display: block !important;
      transform: translateX(0) !important;
      opacity: 1 !important;
      visibility: visible !important;
    }
  `],
})
export class HeaderComponent {
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
