import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signed = false;
  username = '';
  name = '';
  surname = '';
  e_mail ='';
  phone_number ='';
  password ='';
  constructor(private userService: UserService,
              private router: Router) {
  }
  ngOnInit(): {

  }
  // @ts-ignore
  registerUser(){
    this.userService.registerUser(this.username,this.name, this.surname, this.e_mail, this.phone_number, this.password).subscribe(
      response => {
        this.signed=true;
        if(this.signed) {
          this.onSubmit();
        }
        alert("User has been created");
      },
      error => console.log("error", error)
      );


  }

  onSubmit() {
    this.router.navigate(['login/']);
    this.signed=false;
  }
}
