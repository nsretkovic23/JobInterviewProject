import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Candidate, Job } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/job/app.state';
import { deleteJob, selectJob, updateJob } from '../../store/job/jobs.actions';
import { selectSelectedJob } from '../../store/job/jobs.selector';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidatesDialogComponent } from '../candidates-dialog/candidates-dialog.component';

@Component({
  selector: 'job-details-component',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  @ViewChild('usernameInput') usernameInput: ElementRef | null = null;
  @ViewChild('emailInput') emailInput: ElementRef | null = null;

  jobId: string | null = null;
  selectedJobObs: Observable<Job | null | undefined> = of(null);
  selectedJob: Job | null = null;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.jobId = params.get('id');
      if (this.jobId) this.store.dispatch(selectJob({ jobId: this.jobId }));

      this.selectedJobObs = this.store.select(selectSelectedJob);

      this.selectedJobObs.subscribe((job) => {
        if (job) this.selectedJob = job;
      });
    });
  }

  applyForJob() {
    let jobCandidates: Candidate[] = [];
    this.selectedJob?.candidates?.forEach((candidate) =>
      jobCandidates.push(candidate)
    );
    jobCandidates.push({
      username: this.usernameInput?.nativeElement.value,
      email: this.emailInput?.nativeElement.value,
    });
    let updatedJob: Job | null = null;

    if (this.selectedJob)
      updatedJob = { ...this.selectedJob, candidates: jobCandidates };

    if (updatedJob) this.store.dispatch(updateJob({ job: updatedJob }));
  }

  deleteJob() {
    if (this.selectedJob?._id)
      this.store.dispatch(deleteJob({ id: this.selectedJob?._id }));
  }

  candidatesDialog() {
    this.dialog.open(CandidatesDialogComponent, {
      data: this.selectedJob?.candidates,
    });
  }
}
