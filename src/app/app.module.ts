import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './product/products/products.component';
import { DeleteProductModalComponent } from './product/products/partials/delete-product-modal/delete-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DeleteProductModalComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
