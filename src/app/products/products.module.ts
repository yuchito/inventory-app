import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {AddProductComponent} from './partials/add-product/add-product.component';
import {DeleteProductModalComponent} from './partials/delete-product-modal/delete-product-modal.component';
import {ClarityModule} from '@clr/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ThemesModule} from '../@themes/themes.module';
import {OneColumnLayoutComponent} from '../@themes/layouts';



@NgModule({
  imports: [
    ThemesModule,
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,

    ProductsRoutingModule,
  ],
  declarations: [ProductsComponent],
})
export class ProductsModule { }
