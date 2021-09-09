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
import { UserProfilePageComponent } from './components/user-system/user-profile-page/user-profile-page.component';
import { UserAuthGuard } from '../guards/user-guard';

const routes: Routes = [
  {
    path: '',
    component: JobCatalogComponent,
  },
  {
    path: 'create',
    component: CreateJobComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path: 'job/:id',
    component: JobDetailsComponent,
  },
  {
    path: 'signin',
    component: LoginFormComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate:[UserAuthGuard]
  },
  {
    path: 'user/:id',
    component:UserProfilePageComponent
  },
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
