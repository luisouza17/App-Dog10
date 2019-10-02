import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'finalizar-pedido', loadChildren: './finalizar-pedido/finalizar-pedido.module#FinalizarPedidoPageModule' },
  { path: 'finalizar-pedido/:id/:price/:image', loadChildren: './finalizar-pedido/finalizar-pedido.module#FinalizarPedidoPageModule' },  { path: 'add-dog', loadChildren: './add-dog/add-dog.module#AddDogPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
