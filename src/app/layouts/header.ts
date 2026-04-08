import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <div class="top-bar" dir="rtl">
      <div class="top-bar__inner">
        <ul class="top-bar__links">
          <li><a href="#"><i class="govsa--external"></i> البيانات المفتوحة</a></li>
          <li><a href="#"><i class="govsa--chat"></i> الأوامر الصوتية</a></li>
          <li><a href="#"><i class="govsa--Color"></i> ألوان خاصة</a></li>
          <li><a href="#">تواصل معنا</a></li>
          <li><a href="#"><i class="govsa--zoom"></i></a></li>
        </ul>

        <ul class="top-bar__tools">
          <li class="top-bar__date">
            <i class="govsa--info"></i>
            الأربعاء 20/10/1447 - 10:48 م
          </li>
          <li class="top-bar__separator"></li>
          <li><a href="#">EN</a></li>
          <li class="top-bar__separator"></li>
          <li><a href="#" class="top-bar__icon" title="تكبير الخط" (click)="changeFontSize(1); $event.preventDefault()">ع+</a></li>
          <li><a href="#" class="top-bar__icon" title="تصغير الخط" (click)="changeFontSize(-1); $event.preventDefault()">ع-</a></li>
          <li class="top-bar__separator"></li>
          <li><a href="#" class="top-bar__icon" title="طباعة"><i class="govsa--export"></i></a></li>
          <li><a href="#" class="top-bar__icon" title="المفضلة"><i class="govsa--bookmark"></i></a></li>
          <li><a href="#" class="top-bar__icon" title="مشاركة"><i class="govsa--mail"></i></a></li>
        </ul>
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

    .top-bar {
      background: #f7f7f7;
      border-bottom: 1px solid #e8e8e8;
      font-size: 13px;
      font-family: 'Cairo', sans-serif;
    }

    .top-bar__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 100%;
      padding: 0 20px;
      height: 38px;
    }

    .top-bar__links,
    .top-bar__tools {
      display: flex;
      align-items: center;
      gap: 0;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .top-bar__links li,
    .top-bar__tools li {
      display: flex;
      align-items: center;
    }

    .top-bar__links li + li {
      border-right: 1px solid #ddd;
    }

    .top-bar__links a,
    .top-bar__tools a {
      color: #555;
      text-decoration: none;
      padding: 0 12px;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: color .2s;
      white-space: nowrap;
    }

    .top-bar__links a:hover,
    .top-bar__tools a:hover {
      color: #0b6b3a;
    }

    .top-bar__links i,
    .top-bar__tools i {
      font-size: 14px;
    }

    .top-bar__date {
      color: #777;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0 12px;
      white-space: nowrap;
      font-size: 12px;
    }

    .top-bar__separator {
      width: 1px;
      height: 16px;
      background: #ddd;
    }

    .top-bar__icon {
      font-size: 13px;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .top-bar__inner {
        padding: 0 10px;
      }

      .top-bar__links li:not(:first-child):not(:last-child) {
        display: none;
      }

      .top-bar__tools .top-bar__date {
        display: none;
      }

      .top-bar__links a,
      .top-bar__tools a {
        padding: 0 8px;
        font-size: 12px;
      }
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

  changeFontSize(delta: number): void {
    const html = document.documentElement;
    const current = parseFloat(getComputedStyle(html).fontSize);
    html.style.fontSize = (current + delta) + 'px';
  }
}
