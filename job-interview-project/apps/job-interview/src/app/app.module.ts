import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from 'libs/material/src/lib/material.module'

import { JobComponent } from './components/job/job.component';
import { JobListComponent } from './components/job-list/job-list.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, JobComponent, JobListComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
