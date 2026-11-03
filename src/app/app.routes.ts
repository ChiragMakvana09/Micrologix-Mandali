import { Routes } from '@angular/router';
import { guestGuard, sessionGuard } from './core/guards/session.guard';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: 'open',
    title: 'WhatsApp લિંક',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/auth/login').then((m) => m.Login),
  },
  { path: 'login', redirectTo: 'open' },
  {
    path: '',
    component: MainLayout,
    canActivate: [sessionGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        title: 'ડેશબોર્ડ',
        loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'member',
        title: 'સભાસદ વિગત',
        loadComponent: () => import('./features/member/member').then((m) => m.Member),
      },
      {
        path: 'products/:key',
        title: 'પ્રોડક્ટ',
        loadComponent: () => import('./features/product/product-page').then((m) => m.ProductPage),
      },
      {
        path: 'transactions',
        title: 'વ્યવહારો',
        loadComponent: () => import('./features/transactions/transactions').then((m) => m.Transactions),
      },
      {
        path: 'transactions/:product',
        title: 'વ્યવહારો',
        loadComponent: () => import('./features/transactions/transactions').then((m) => m.Transactions),
      },
      {
        path: 'transactions/:product/:acc',
        title: 'મિની સ્ટેટમેન્ટ',
        loadComponent: () => import('./features/transactions/transactions').then((m) => m.Transactions),
      },
      {
        path: 'cards',
        title: 'કાર્ડ્સ',
        loadComponent: () => import('./features/cards/cards').then((m) => m.Cards),
      },
      {
        path: 'settings',
        title: 'સેટિંગ્સ',
        loadComponent: () => import('./features/settings/settings').then((m) => m.Settings),
      },
      {
        path: 'notifications',
        title: 'સૂચનાઓ',
        loadComponent: () =>
          import('./features/notifications/notifications').then((m) => m.Notifications),
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
