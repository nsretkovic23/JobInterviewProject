import { Component, OnChanges, OnInit } from '@angular/core';
import { AppState } from './store/job/app.state';
import { Store } from '@ngrx/store';
import { loadJobs } from './store/job/jobs.actions';
import { loadSignedInUser, signOutUser } from './store/user/user.actions';
import { User } from '@job-interview-project/api-interfaces';
import { Observable, of } from 'rxjs';
import { selectSignedInUser } from './store/user/user.selector';

@Component({
  selector: 'job-interview-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  constructor(private store: Store<AppState>) {}

  signedInUser : Observable<User | null> | null = null;

  ngOnInit() {
    this.store.dispatch(loadJobs());
    this.store.dispatch(loadSignedInUser());
    this.signedInUser = this.store.select(selectSignedInUser);
  }

  ngOnChanges(){

  }

  signOut(){
    this.store.dispatch(signOutUser());
    this.signedInUser = null;
  }
}
