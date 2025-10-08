import { Routes } from '@angular/router';
import { AdminDashbordadLayoutComponent } from './layouts/admin-dashbordad-layout/admin-dashbordad-layout.component';
import { ProductsAdminPageComponent } from './pages/products-admin-page/products-admin-page.component';
import { ProductAdminPageComponent } from './pages/product-admin-page/product-admin-page.component';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashbordadLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'product/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ],
  },
];

export default adminDashboardRoutes;
