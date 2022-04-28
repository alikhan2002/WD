import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Category} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/app/login/`, {
      username,
      password
    });
  }


  getCompany(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/app/companies/`);
  }
}
