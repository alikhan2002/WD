import { Component, OnInit } from '@angular/core';
import {Product, User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../cart.service";
import {ProductService} from "../../product.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  // products=products;
  products: Product[]=[];
  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private productService: ProductService,
              private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
    this.getProduct();
  }
  total:number=0;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.total += product['price'];

  }
  id= 0;
  // @ts-ignore
  // deleteItem() {
  //   this.userService.deleteItem(this.id).subscribe()
  // }
  deleteItem(id: number) {
    if(confirm("Do you really wanna delete this item?")) {
      this.http.delete(`http://127.0.0.1:8000/app/products/crud/${id}`).subscribe(
        response => {
          alert("Deleted");
        },
        error => console.log("error", error)
      );
    }

  }
  getProduct() {
    this.productService.getProduct().subscribe((data) => {
        this.products = data;
    })
  }
}

