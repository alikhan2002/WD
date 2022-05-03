import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../../models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;
  username = "";
  password = "";
  user: User|undefined;
  ngOnInit() {
    const token = localStorage.getItem('token')
    if (token) {
      this.logged = true;
    }
    this.getUser();

  }

  constructor(private productService: ProductService,
              private userService: UserService,
              private router: Router) {

  }

  login() {
    this.productService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', this.username);
      this.logged = true;
      this.username = '';
      this.password = '';
      if(this.logged) {
        this.onSubmit();
      }
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');

  }
  onSubmit() {
    this.router.navigate(['category/pc'])
  }
  getUser() {
    this.userService.getUser().subscribe((data)=> {
      console.log(data);
    })
  }

}
