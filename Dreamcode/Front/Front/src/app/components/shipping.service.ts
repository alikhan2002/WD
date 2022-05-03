import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private http: HttpClient) { }


  BASE_URL =  "http://127.0.0.1:8000/app/shipping/";
  purchase(fullname: string, address:string, shipping_type: string, user_id: number): Observable<any>{
    return this.http.post(`${this.BASE_URL}`, {
      fullname,
      address,
      shipping_type,
      user_id
    });
  }
}
