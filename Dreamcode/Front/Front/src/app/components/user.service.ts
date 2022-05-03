import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthToken, User} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }
  BASE_URL = 'http://localhost:8000';

  registerUser(username: string, name:string, surname:string, e_mail: string, phone_number:string,password:string): Observable<any>{
    return this.http.post(`${this.BASE_URL}/app/user/`, {
      username,
      name,
      surname,
      e_mail,
      phone_number,
      password
    });
  }
  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/app/login/`, {
      username,
      password
    });
  }
}
