import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {UserService} from "../user.service";
import {User} from "../../models";
import {ShippingService} from "../shipping.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit{

  shippingCosts = this.cartService.getShippingPrices();
  items = this.cartService.getItems();

  user: User | undefined;
  users: [] = [];
  fullname='';
  address= '';
  shipping_type='';
  user_id = 0;
  username = localStorage.getItem("username");
  constructor(
    private shippingService: ShippingService,
    private userService: UserService,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getUser();
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.fullname = "";
    this.address="";
    this.shipping_type="";
    this.router.navigate(['category/pc'])

  }
  purchase() {
    // @ts-ignore
    this.user_id = this.user['id'];
    this.shippingService.purchase(this.fullname, this.address, this.shipping_type, this.user_id).subscribe(
      response => {
        alert("Your order has been purchased")
      },
      error => console.log("error", error)
    );
    this.onSubmit();
  }

  getUser() {
    this.userService.getUser().subscribe((data)=> {
      // @ts-ignore
      this.users = data.filter(el => el.username === this.username);
      // @ts-ignore
      this.user = this.users[0];
    })
  }

}
