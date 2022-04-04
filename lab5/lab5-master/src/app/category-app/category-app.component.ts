import { Component } from '@angular/core';
import { categories } from '../category';
// import { products } from '../products';

@Component({
  selector: 'app-category-app',
  templateUrl: './category-app.component.html',
  styleUrls: ['./category-app.component.css']
})
export class CategoryAppComponent {

  categories=categories;

}
