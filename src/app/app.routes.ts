import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
      },
      {
        path: 'executive-summary',
        loadChildren: () =>
          import('./features/executive-summary/executive-summary.routes').then(m => m.EXECUTIVE_SUMMARY_ROUTES),
      },
      {
        path: 'economic-indicators',
        loadChildren: () =>
          import('./features/economic-indicators/economic-indicators.routes').then(m => m.ECONOMIC_INDICATORS_ROUTES),
      },
      {
        path: 'expenditures',
        loadChildren: () =>
          import('./features/expenditures/expenditures.routes').then(m => m.EXPENDITURES_ROUTES),
      },
      {
        path: 'revenues',
        loadChildren: () =>
          import('./features/revenues/revenues.routes').then(m => m.REVENUES_ROUTES),
      },
      {
        path: 'deficit-surplus',
        loadChildren: () =>
          import('./features/deficit-surplus/deficit-surplus.routes').then(m => m.DEFICIT_SURPLUS_ROUTES),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
