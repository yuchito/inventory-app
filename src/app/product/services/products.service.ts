import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IProduct {
  id: number;
  name: string;
  active: boolean;
  expirationDate: string;
  description: string;
  type: string;
  features?: string[];
}

function generateId(): number {
  return Math.floor(Math.random() * 1000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // 11 products
  products: IProduct[] = [{
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }, {
    id: generateId(),
    name: 'IPhone X',
    active: false,
    description: 'Like Brand New',
    expirationDate: '01/15/2019',
    type: 'mobile'
  }
  ];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  removeProduct(productToBeDeleted: IProduct): void {
    const index = this.products.indexOf(productToBeDeleted);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}
