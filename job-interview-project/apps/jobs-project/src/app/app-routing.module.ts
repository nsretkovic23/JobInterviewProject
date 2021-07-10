import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { JobCatalogComponent } from './components/job-catalog/job-catalog.component';
import { JobComponent } from './components/job/job.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

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
    path:"job/:id",
    component:JobDetailsComponent
  },
  {
    path:"**", //instead of 404 page redirect to home page
    redirectTo: ""
  }
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
