import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  name='';
  price=0;
  description = '';
  img = '';
  rating=0;
  cat_id=0;
  catName = '';
  postItem() {
    this.productService.postItem(this.name, this.price, this.description, this.img, this.rating, this.cat_id,this.catName).subscribe((data)=> {
      console.log(data);
    });
  }

}
