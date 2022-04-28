import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../../models";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  items = this.cartService.getItems();
  total = this.cartService.getTotal();

  constructor(private cartService: CartService) {

  }
  clearCart(){
    this.cartService.clearCart();
  }

}
