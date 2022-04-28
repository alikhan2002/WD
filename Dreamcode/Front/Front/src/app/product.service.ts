import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken, Category, Product} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/app/login/`, {
      username,
      password
    });
  }
  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/app/products/`);
  }
}
