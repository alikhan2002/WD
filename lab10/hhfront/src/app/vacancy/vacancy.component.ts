import { Component, OnInit } from '@angular/core';
import {Vacancy} from "../models";
import {VacancyService} from "../vacancy.service";
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getVacancy();
    console.log(this.vacancies)

  }



  getVacancy() {
    this.vacancyService.getVacancy().subscribe((data) => {
      // this.vacancies = data;
      // console.log("works")
      this.route.paramMap.subscribe((params) => {
        // @ts-ignore
        const id = +params.get('id');
        console.log(id);
        this.vacancies = data.filter(el=> el.company === id);
        console.log(this.vacancies)
      })
    })
  }
}
