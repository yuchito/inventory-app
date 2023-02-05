import {ChangeDetectionStrategy, Component} from '@angular/core';
import {IProduct, ProductsService} from './services/products.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  template: `
      <app-one-column-layout>
        <router-outlet></router-outlet>
      </app-one-column-layout>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  constructor() {
  }
}
