import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  template: `
    <div class="h-screen flex flex-col bg-surface">
      <app-header />

      <div class="flex flex-1 overflow-hidden">
        <app-sidebar [isOpen]="sidebarOpen()" />

        <div
          class="flex-1 overflow-y-auto lg:hidden fixed inset-0 bg-black/50 z-20 transition-opacity"
          [class.hidden]="!sidebarOpen()"
          (click)="closeSidebar()"
        ></div>

        <main class="flex-1 overflow-y-auto p-6">
          <router-outlet />
        </main>
      </div>
    </div>
  `,
})
export class MainLayoutComponent {
  sidebarOpen = signal(false);

  constructor() {
    document.addEventListener('toggle-sidebar', () => {
      this.sidebarOpen.update((v) => !v);
    });
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
