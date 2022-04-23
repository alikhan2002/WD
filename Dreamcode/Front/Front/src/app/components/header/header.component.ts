import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'hhfront';
  logged = false;
  username = "";
  password = "";

  ngOnInit() {
    const token = localStorage.getItem('token')
    if(token) {
      this.logged = true;
    }
  }
  constructor(private companyService: CategoryService) {}
  login() {
    this.companyService.login(this.username, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token)
      this.logged=true;
      this.username='';
      this.password='';
    });
  }
  logout() {
    this.logged=false;
    localStorage.removeItem('token');
  }

  update(){
    window.location.reload();
  }

}
