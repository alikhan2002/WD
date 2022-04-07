import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('categoryId'));
    const pro = products.filter((product)=> product.catID === productIdFromRoute)
    this.products = pro;
    // console.log(pro)
  } 
  numberOfLikes : number = 0;
  
  
  likeButtonClick() {
    this.numberOfLikes++;
  }
  removeFromCatalog(product: Product){
   product.catID = 0; 
   console.log(product);
   window.alert('Your product has been deleted!');

  }



}
