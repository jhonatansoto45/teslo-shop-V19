import { Routes } from '@angular/router';
import { AdminDashbordadLayoutComponent } from './layouts/admin-dashbordad-layout/admin-dashbordad-layout.component';
import { ProductsAdminPageComponent } from './pages/products-admin-page/products-admin-page.component';
import { ProductAdminPageComponent } from './pages/product-admin-page/product-admin-page.component';
import { IsAdminGuard } from '@auth/guards/is-admin.guard';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashbordadLayoutComponent,
    canMatch: [IsAdminGuard],
    children: [
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'products/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];

export default adminDashboardRoutes;
