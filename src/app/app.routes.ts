import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    title: 'HOME',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    title: 'ABOUT',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
    canActivate: [authGuard],
    data: { score: 10 },
  },
  {
    path: 'customers',
    title: 'CUSTOMERS',
    loadComponent: () =>
      import('./customers/customers.component').then(
        (c) => c.CustomersComponent
      ),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./customer-profile/customer-profile.component').then(
            (c) => c.CustomerProfileComponent
          ),
        title: (r) => `CUSTOMER - ${r.params['id']}`,
      },
    ],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./unauthorized/unauthorized.component').then(
        (c) => c.UnauthorizedComponent
      ),
    title: 'UNAUTHORIZED',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
