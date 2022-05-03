import { Injectable } from '@angular/core';
import {Product, Shipping} from "../models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  constructor(private http: HttpClient) { }
  total:number=0;
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  addToCart(product: Product) {
    this.items.push(product);
    this.total+=product['price'];

  }
  getTotal(){
    return this.total;
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.total=0;
    return this.items;
  }


}
