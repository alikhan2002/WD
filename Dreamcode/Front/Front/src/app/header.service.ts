import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/app/login/`, {
      username,
      password
    });
  }
}
