import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}`);
  }
}
