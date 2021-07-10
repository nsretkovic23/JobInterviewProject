import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { Job } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/job/app.state';
import { selectAllJobs } from '../../store/job/jobs.selector';

@Component({
  selector: 'job-list-component',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobListComponent implements OnInit {

  jobs:Observable<readonly Job[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.jobs = this.store.select(selectAllJobs);
  } 
}
