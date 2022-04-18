import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {NotFoundError} from "rxjs";

const routes: Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/:id/vacancy', component:VacancyComponent},
  {path: '**', component: NotFoundError}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
