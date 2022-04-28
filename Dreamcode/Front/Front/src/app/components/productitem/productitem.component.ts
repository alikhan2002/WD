import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CartService } from '../cart.service';
import {ProductService} from "../../product.service";
import {Product} from "../../models";


@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {
  products: Product[] = [];
  product: Product|undefined;
  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.getProductItem();
    console.log(this.products)
  }
  total:number=0;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.total += product['price'];

  }
  getProductItem() {
    this.productService.getProduct().subscribe((data) => {
      this.route.paramMap.subscribe((params) => {
        // @ts-ignore
        const id = +params.get('id');
        this.products = data.filter(el => el.id === id);
        this.product = this.products[0];
        // console.log(this.product)
      })
    })
  }


}
