import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../category.service";
import {HeaderService} from "../../header.service";
import {ProductService} from "../../product.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title = 'Front';
  ngOnInit() {
  }
  constructor() {
  }
}

