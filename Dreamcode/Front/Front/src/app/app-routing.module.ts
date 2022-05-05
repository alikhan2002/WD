import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductitemComponent} from "./components/productitem/productitem.component";
import {CartComponent} from "./components/cart/cart.component";

import {ShippingComponent} from "./components/shipping/shipping.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {CrudComponent} from "./components/crud/crud.component";
import {CruditemComponent} from "./components/cruditem/cruditem.component";
import {PostComponent} from "./components/post/post.component";

const routes: Routes = [
  // {path: '', component:HomeComponent},
  { path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent },
  {path:'category/:name', component: ProductsComponent},
  {path:'product/:id', component: ProductitemComponent},
  {path:'crud', component: CrudComponent},
  { path: 'crud/post', component: PostComponent},
  {path:'crud/:id' , component: CruditemComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
