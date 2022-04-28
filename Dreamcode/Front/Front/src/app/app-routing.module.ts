import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductitemComponent} from "./components/productitem/productitem.component";
import {CartComponent} from "./components/cart/cart.component";

import {ShippingComponent} from "./components/shipping/shipping.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  // {path: '', component:HomeComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  {path:'category/:name', component: ProductsComponent},
  {path:'product/:id', component: ProductitemComponent},
  {path: '', redirectTo: 'category/pc', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
