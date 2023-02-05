import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full',
    },
    {
      path: 'products',
      loadChildren: () => import('./products-list/products-list.module')
        .then(m => m.ProductsListModule),
    },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
