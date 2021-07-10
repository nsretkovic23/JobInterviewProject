import { Component, OnInit } from '@angular/core';
import { Job, Test, Message } from '@job-interview-project/api-interfaces';
import { AppState } from './store/job/app.state';
import { Store } from '@ngrx/store';
import { loadJobs } from './store/job/jobs.actions';

@Component({
  selector: 'job-interview-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private store:Store<AppState>) {}


  ngOnInit() {
    this.store.dispatch(loadJobs());
  }
}
