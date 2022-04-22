import { Component, OnInit } from '@angular/core';
import {categories} from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor() { }

  categories=categories
}
