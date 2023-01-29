import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IProduct, ProductsService} from '../services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;

  constructor(private productsService: ProductsService) {
  }

  trackById(index, item): number {
    return item.id;
  }

  addProduct(): void {

  }

  onEdit(product: IProduct): void {

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
