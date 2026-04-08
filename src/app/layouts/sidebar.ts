import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <aside
      class="fixed lg:static inset-y-0 left-0 z-30 w-64 bg-sidebar text-white transform transition-transform duration-200 ease-in-out flex flex-col"
      [class.-translate-x-full]="!isOpen()"
      [class.translate-x-0]="isOpen()"
      [class.lg:translate-x-0]="true"
    >
      <div class="h-16 lg:hidden"></div>

      <nav class="flex-1 px-3 py-4 overflow-y-auto">
        <p class="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
          Main Menu
        </p>
        @for (item of navItems; track item.route) {
          <a
            [routerLink]="item.route"
            routerLinkActive="bg-sidebar-hover text-accent"
            [routerLinkActiveOptions]="{ exact: item.route === '/dashboard' }"
            class="flex items-center gap-3 px-3 py-2.5 mb-1 rounded-lg text-sm font-medium text-white/80 hover:bg-sidebar-hover hover:text-white transition-colors"
          >
            <span [innerHTML]="item.icon"></span>
            {{ item.label }}
          </a>
        }
      </nav>

      <div class="p-4 border-t border-white/10">
        <p class="text-xs text-white/40">&copy; 2026 Ministry of Finance</p>
      </div>
    </aside>
  `,
})
export class SidebarComponent {
  isOpen = input(true);

  navItems: NavItem[] = [
    {
      label: 'Dashboard',
      route: '/dashboard',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>',
    },
    {
      label: 'Budget Overview',
      route: '/budget',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>',
    },
    {
      label: 'Revenue',
      route: '/revenue',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>',
    },
    {
      label: 'Expenditure',
      route: '/expenditure',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>',
    },
    {
      label: 'Reports',
      route: '/reports',
      icon: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>',
    },
  ];
}
