import { Component, OnInit } from '@angular/core';
import {Product, products} from "../../models";
import {ActivatedRoute} from "@angular/router";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {CartService} from "../cart.service";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products=products;
  products: Product[]=[];
  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private productService: ProductService) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.su('name');
    // console.log(id);
    this.getProduct();
    // this.route.paramMap.subscribe((params) => {
    //   // @ts-ignore
    //   const id = String(params.get('name'));
    //   console.log(id);
    //   this.products = products.filter(el=> el.catName === id);
    //   console.log(this.products)
    // })
  }
  total:number=0;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.total += product['price'];
    console.log(this.total)

  }
  getProduct() {
    this.productService.getProduct().subscribe((data) => {
      // this.vacancies = data;
      // console.log("works")
      console.log(data);
      this.route.paramMap.subscribe((params) => {
        // @ts-ignore
        const id = String(params.get('name'));
        // console.log(id);
        this.products = data.filter(el => el.catName === id);
        console.log(this.products)
      })
    })
  }
}
