import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'libs/material/src/lib/material.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { JobComponent } from './components/job/job.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { JobCatalogComponent } from './components/job-catalog/job-catalog.component';
import { CreateJobComponent } from './components/create-job/create-job.component';
import { JobsEffects } from './store/job/jobs.effects';
import { jobsReducer } from './store/job/jobs.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JobComponent,
    JobListComponent,
    FilterCardComponent,
    JobCatalogComponent,
    CreateJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(
      {jobs:jobsReducer},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([JobsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
