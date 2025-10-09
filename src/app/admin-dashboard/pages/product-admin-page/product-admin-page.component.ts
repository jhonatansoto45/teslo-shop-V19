import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-admin-page',
  imports: [],
  templateUrl: './product-admin-page.component.html',
})
export class ProductAdminPageComponent {
  private readonly productService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly productId = toSignal(
    this.activatedRoute.params.pipe(map((params) => params['id']))
  );

  readonly productResource = rxResource({
    request: () => ({ id: this.productId() }),
    loader: ({ request }) => {
      return this.productService.getProductById(request.id);
    },
  });

 readonly redirectEffect = effect(() => {
if(this.productResource.error()){
  this.router.navigate(['/admin/products'])
}
  })
}
