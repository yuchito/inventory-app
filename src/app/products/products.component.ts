import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IProduct, ProductsService} from './services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  template: `
      <app-one-column-layout>
        <!-- menu side bar-->
        <router-outlet></router-outlet>
      </app-one-column-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  productOpen: boolean;
  selectedProduct: IProduct;
  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;
  isGridView = true;

  constructor(private productsService: ProductsService) {
  }

  trackById(index, item): number {
    return item.id;
  }

  addProduct(): void {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product: IProduct): void {
    console.warn(product);
    this.productOpen = true;
    this.selectedProduct = product;
  }

  handleFinish(event): void {
    if (event && event.product) {
      if (this.selectedProduct) {
        // Edit Flow
        this.productsService.editProduct(this.selectedProduct.id,
          event.product);
      } else {
        // Save New
        this.productsService.addProduct(event.product);
      }
    }
    this.productOpen = false;
  }

  onDelete(product: IProduct): void {
    this.delete = true;
    this.productToBeDeleted = product;
  }

  handleCancel(): void {
    this.delete = false;
  }

  confirmDelete(): void {
    this.handleCancel();
    this.productsService.removeProduct(this.productToBeDeleted);
  }
}
