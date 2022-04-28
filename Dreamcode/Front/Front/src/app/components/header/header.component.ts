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
  logged = false;
  username = "";
  password = "";

  ngOnInit() {
    const token = localStorage.getItem('token')
    if (token) {
      this.logged = true;
    }


  }

  constructor(private productService: ProductService,
              private router: Router) {

  }

  login() {
    this.productService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token)
      this.logged = true;
      this.username = '';
      this.password = '';
    });

  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }

}

