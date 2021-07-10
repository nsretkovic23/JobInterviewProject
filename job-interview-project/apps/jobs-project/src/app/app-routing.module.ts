import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { JobCatalogComponent } from './components/job-catalog/job-catalog.component';
import { JobComponent } from './components/job/job.component';
import { CreateJobComponent } from './components/create-job/create-job.component';

const routes:Routes = [
  {
    path:"",
    component: JobCatalogComponent
  },
  {
    path:"create",
    component:CreateJobComponent
  },
  {
    path:"**", //instead of 404 page redirect to home page
    redirectTo: ""
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
