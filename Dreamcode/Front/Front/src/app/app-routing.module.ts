import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductitemComponent} from "./components/productitem/productitem.component";
import {CartComponent} from "./components/cart/cart.component";
import {ShippingComponent} from "./components/shipping/shipping.component";

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'products', component: ProductsComponent},
  { path: 'products/:productId', component: ProductitemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
