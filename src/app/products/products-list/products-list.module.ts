import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import {ClarityModule} from '@clr/angular';
import {AddProductComponent} from '../partials/add-product/add-product.component';
import {DeleteProductModalComponent} from '../partials/delete-product-modal/delete-product-modal.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductsListComponent, AddProductComponent, DeleteProductModalComponent],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    ClarityModule,
    ReactiveFormsModule
  ],
})
export class ProductsListModule { }
