import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface IProduct {
  id: number;
  name?: string;
  active?: boolean;
  expirationDate?: string;
  quantity?: number;
  description?: string;
  type?: { name: string; icon: string };
  condition?: 'Good' | 'As new' | 'Fair';
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
    name: 'Galaxy Tab S7',
    active: false,
    description: '11 inch tablet with 5G connectivity',
    expirationDate: '08/15/2023',
    type: {name: 'Tablet', icon: 'tablet'},
    quantity: 20
  }, {
    id: generateId(),
    name: 'Asus ROG Zephyrus',
    active: true,
    description: 'Gaming laptop with NVIDIA GeForce RTX 3080',
    expirationDate: '07/30/2023',
    type: {name: 'Laptop', icon: 'computer'},
    quantity: 20
  }, {
    id: generateId(),
    name: 'Dell XPS 15',
    active: false,
    description: 'Lightweight laptop with 11th Gen Intel Core processors',
    expirationDate: '09/01/2023',
    type: {name: 'Laptop', icon: 'computer'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'iPad Pro',
    active: true,
    description: '11 inch tablet with M1 chip',
    expirationDate: '08/01/2023',
    type: {name: 'Tablet', icon: 'tablet'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Samsung Galaxy S21',
    active: false,
    description: '5G smartphone with 6.2 inch screen',
    expirationDate: '07/15/2023',
    type: {name: 'Mobile', icon: 'mobile'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Pixel 6 Pro',
    active: true,
    description: '5G smartphone with 6.4 inch OLED display',
    expirationDate: '09/30/2023',
    type: {name: 'Mobile', icon: 'mobile'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Macbook Pro',
    active: true,
    description: 'Newest model with 16GB RAM',
    expirationDate: '06/30/2023',
    type: {name: 'Laptop', icon: 'computer'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Lenovo Legion 5',
    active: false,
    description: 'Gaming laptop with NVIDIA GeForce RTX 3070',
    expirationDate: '10/15/2023',
    type: {name: 'Laptop', icon: 'computer'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'LG 27UK650',
    active: true,
    description: '27 inch 4K UHD monitor with HDR 10',
    expirationDate: '11/30/2023',
    type: {name: 'Monitor', icon: 'display'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Surface Pro 7',
    active: false,
    description: '12.3 inch tablet with Intel Core i5',
    expirationDate: '12/01/2023',
    type: {name: 'Tablet', icon: 'tablet'},
    quantity: 0
  }, {
    id: generateId(),
    name: 'Huawei Matebook X Pro',
    active: true,
    description: '13.9 inch laptop with 11th Gen Intel Core processors',
    expirationDate: '01/01/2024',
    type: {name: 'Laptop', icon: 'computer'},
    quantity: 0
  }];

  products$ = new BehaviorSubject<IProduct[]>(this.products);

  addProduct(product): void {
    this.products = [
      {
        id: generateId(),
        ...product,
      },
      ...this.products,
    ];
    this.products$.next(this.products);
  }

  editProduct(id, product): void {
    const index = this.products.findIndex(p => p.id === id);
    this.products = [
      ...this.products.slice(0, index),
      {
        id,
        ...product,
      },
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }

  removeProduct(productToBeDeleted: IProduct): void {
    const index = this.products.indexOf(productToBeDeleted);
    this.products = [
      ...this.products.slice(0, index),
      ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
  }
}
