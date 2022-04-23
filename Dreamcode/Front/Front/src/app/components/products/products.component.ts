import { Component, OnInit } from '@angular/core';
import {Product, products} from "../../models";
import {ActivatedRoute} from "@angular/router";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=products;
  product: Product|undefined;
  constructor(private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.su('name');
    // console.log(id);

    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = String(params.get('name'));
      console.log(id);
      this.products = products.filter(el=> el.catName === id);
      console.log(this.products)
    })
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
