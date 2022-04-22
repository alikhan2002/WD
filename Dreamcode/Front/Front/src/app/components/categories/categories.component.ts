import { Component, OnInit } from '@angular/core';
import {categories} from "../../models";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor() { }

  categories=categories

}
