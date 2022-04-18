import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];
  constructor(private companyService: CompanyService) { }


  ngOnInit(): void {
    this.getCompany();
    console.log(this.companies);
  }

  getCompany() {
    this.companyService.getCompany().subscribe((data) => {
      this.companies = data;
      console.log(data)
    })
  }

}
