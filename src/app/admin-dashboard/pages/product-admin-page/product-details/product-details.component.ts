import { Component, inject, input, OnInit } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { ProductCarouselComponent } from '@products/components/product-carousel/product-carousel.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '@utils/form-utils';

@Component({
  selector: 'product-details',
  imports: [ProductCarouselComponent, ReactiveFormsModule],
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);

  readonly productForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    slug: [
      '',
      [Validators.required, Validators.pattern(FormUtils.slugPattern)],
    ],
    price: [0, [Validators.required, Validators.minLength(0)]],
    stock: [0, [Validators.required, Validators.minLength(0)]],
    sizes: [['']],
    images: [[]],
    tags: [''],
    gender: [
      'men',
      [Validators.required, Validators.pattern(/men|women|kin|unisex/)],
    ],
  });

  readonly product = input.required<Product>();

  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  ngOnInit(): void {
    this.setFormValue(this.product())
  }

  setFormValue(formLike: Partial<Product>) {
     this.productForm.reset(this.product() as any);
     this.productForm.patchValue({tags: formLike.tags?.join(',')});
    // this.productForm.patchValue(formLike as any);
  }

  submit() {
    console.log(this.productForm.value);
  }
}
