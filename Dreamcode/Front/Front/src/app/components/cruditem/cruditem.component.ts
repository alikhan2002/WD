import { Component, OnInit } from '@angular/core';
import {Product} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../cart.service";
import {ProductService} from "../../product.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "../user.service";

@Component({
  selector: 'app-cruditem',
  templateUrl: './cruditem.component.html',
  styleUrls: ['./cruditem.component.css']
})
export class CruditemComponent implements OnInit {

  products: Product[] = [];
  product: Product|undefined;
  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private productService: ProductService,
              private userService: UserService,
              private http: HttpClient) {
  }
  name='';
  price=0;
  description = '';
  img = '';
  rating=0;
  catName = '';
  cat_id=0;
  putItem() {
    // @ts-ignore
    this.userService.putItem(this.name, this.price, this.description, this.img, this.rating, this.catName, this.product.id, this.cat_id).subscribe(
      response => {
        alert("all good");
        // @ts-ignore
        console.log(this.product.id);
      },error => console.log("error", error)
    );
  }

  ngOnInit() {
    this.getProductItem();
    console.log(this.products)
  }
  total:number=0;
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

