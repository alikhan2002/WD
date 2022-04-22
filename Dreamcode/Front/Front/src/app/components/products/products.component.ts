import { Component, OnInit } from '@angular/core';
import {products} from "../../models";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = products;
  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }

}
