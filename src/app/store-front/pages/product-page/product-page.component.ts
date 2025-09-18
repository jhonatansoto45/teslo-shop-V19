import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  private readonly productsService = inject(ProductsService);
  private readonly activatedRouter = inject(ActivatedRoute);

  private readonly params = toSignal(this.activatedRouter.params);

  productIdSlug = this.params()?.['idSlug'];

  productResource = rxResource({
    request: () => ({ productIdSlug: this.productIdSlug }),
    loader: ({ request }) =>
      this.productsService.getProductByIdSlug(request.productIdSlug),
  });
}
