import { Component, OnInit } from '@angular/core';
import {IProduct, ProductsService} from '../services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  productOpen: boolean;
  selectedProduct: IProduct;
  products$: Observable<IProduct[]> = this.productsService.products$;
  delete = false;
  productToBeDeleted;
  isGridView = true;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  trackById(index, item): number {
    return item.id;
  }

  addProduct(): void {
    this.productOpen = true;
    this.selectedProduct = undefined;
  }

  onEdit(product: IProduct): void {
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
