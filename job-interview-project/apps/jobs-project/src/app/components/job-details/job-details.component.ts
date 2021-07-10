import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Job } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/job/app.state';
import { loadJobs, selectJob } from '../../store/job/jobs.actions';
import { selectSelectedJob } from '../../store/job/jobs.selector';

@Component({
  selector: 'job-details-component',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  jobId:string | null = null;
  selectedJobObs: Observable<Job | null | undefined> = of(null);
  selectedJob:Job|null = null;

  constructor(private route : ActivatedRoute, private store : Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap) => {
      
      this.jobId = params.get('id');
      if(this.jobId)
        this.store.dispatch(selectJob({jobId:this.jobId}))

      this.selectedJobObs = this.store.select(selectSelectedJob);
      
      this.selectedJobObs.subscribe(job=>{
        if(job)
        this.selectedJob = job
      } );
    }) 
  }

}
