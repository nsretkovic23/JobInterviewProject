import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Job } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/job/app.state';
import * as Selectors from '../../store/job/jobs.selector';
import * as Actions from '../../store/job/jobs.actions';

@Component({
  selector: 'job-list-component',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobListComponent implements OnInit, OnChanges {
  @Input() filterString = '';

  jobs: Observable<readonly Job[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.jobs = this.store.select(Selectors.selectFilteredJobs);
  }

  ngOnChanges() {
    this.store.dispatch(
      Actions.filterJobs({ filterJobsString: this.filterString })
    );
  }
}
