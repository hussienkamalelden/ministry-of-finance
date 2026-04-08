import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="h-16 bg-primary text-white flex items-center justify-between px-6 shadow-md z-20">
      <div class="flex items-center gap-3">
        <button
          class="lg:hidden p-2 rounded-md hover:bg-primary-light transition-colors"
          (click)="toggleSidebar()"
          aria-label="Toggle sidebar"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-bold text-primary-dark text-sm">
            MF
          </div>
          <div>
            <h1 class="text-lg font-semibold leading-tight">Ministry of Finance</h1>
            <p class="text-xs text-white/70 hidden sm:block">Government Portal</p>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4">
        <button class="relative p-2 rounded-full hover:bg-primary-light transition-colors" aria-label="Notifications">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
        </button>
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-sm font-medium">
            A
          </div>
          <span class="hidden md:inline text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    document.dispatchEvent(new CustomEvent('toggle-sidebar'));
  }
}
