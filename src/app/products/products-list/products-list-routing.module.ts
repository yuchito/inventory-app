import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddProductComponent} from '../partials/add-product/add-product.component';
import {ProductsListComponent} from './products-list.component';

const routes: Routes = [{
  path: '',
  component: ProductsListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListRoutingModule { }
