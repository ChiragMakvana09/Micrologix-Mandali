import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'ડેશબોર્ડ',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      // Modules below are built one by one; swap loadComponent when each page is ready.
      ...['transactions', 'cards', 'settings'].map((path) => ({
        path,
        data: { title: { transactions: 'વ્યવહારો', cards: 'કાર્ડ્સ', settings: 'સેટિંગ્સ' }[path] },
        loadComponent: () =>
          import('./features/placeholder/placeholder-page').then((m) => m.PlaceholderPage),
      })),
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
