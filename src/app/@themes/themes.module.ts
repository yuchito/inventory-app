import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneColumnLayoutComponent } from './layouts';
import {ClarityModule} from '@clr/angular';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  exports: [
    OneColumnLayoutComponent,
    CommonModule
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [OneColumnLayoutComponent, HeaderComponent],
})
export class ThemesModule { }
