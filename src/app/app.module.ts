import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxBarcodeModule} from 'ngx-barcode';
import {ThemesModule} from './@themes/themes.module';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ThemesModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

//    NgxBarcodeModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
