import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      console.log(this.logged)
      if(this.logged) {
        this.onSubmit();
      }

    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }
  onSubmit() {
    this.router.navigate(['category/pc'])
  }

}
