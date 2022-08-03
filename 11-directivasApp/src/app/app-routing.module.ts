import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'agregar',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'agregar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
