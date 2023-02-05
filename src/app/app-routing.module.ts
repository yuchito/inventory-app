import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'inventory',
    loadChildren: () => import('./products/products.module')
      .then(m => m.ProductsModule),
  },
  {path: '', redirectTo: 'inventory', pathMatch: 'full'},
  {path: '**', redirectTo: 'inventory'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
