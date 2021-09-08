import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobCatalogComponent } from './components/job-catalog/job-catalog.component';
import { JobComponent } from './components/job/job.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { LoginFormComponent } from './components/user-system/login-form/login-form.component';
import { SignupUserComponent } from './components/user-system/signup-user/signup-user.component';
import { SignupCompanyComponent } from './components/user-system/signup-company/signup-company.component';
import { SignupComponent } from './components/user-system/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: JobCatalogComponent,
  },
  {
    path: 'create',
    component: CreateJobComponent,
  },
  {
    path: 'job/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    // TODO: Make Universal signup component and switch between tabs through user and company signup components
    component: SignupComponent
  },
  {
    path: 'user/signup',
    component: SignupUserComponent
  },
  {
    path: 'company/signup',
    component: SignupCompanyComponent
  },
  // TODO: Add Company and User profile page routes
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
