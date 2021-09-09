import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Candidate, Job, User } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/job/app.state';
import { deleteJob, selectJob, updateJob } from '../../store/job/jobs.actions';
import { selectSelectedJob } from '../../store/job/jobs.selector';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CandidatesDialogComponent } from '../candidates-dialog/candidates-dialog.component';
import { selectSignedInUser } from '../../store/user/user.selector';
import { updateUser } from '../../store/user/user.actions';

@Component({
  selector: 'job-details-component',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  jobId: string | null = null;
  selectedJobObs: Observable<Job | null | undefined> = of(null);
  selectedJob: Job | null = null;
  signedInUserObs: Observable<User | null> | null = null;
  signedInUser: User | null = null;
  isSignedInUserAlreadyApplied = false;

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

    this.signedInUserObs = this.store.select(selectSignedInUser);
    this.signedInUserObs.subscribe((user) => this.signedInUser = user);

    this.isSignedInUserAlreadyApplied = this.checkIfApplied();
  }

  updateJob(){
    let jobCandidates: Candidate[] = [];
    this.selectedJob?.candidates?.forEach((candidate) =>
      jobCandidates.push(candidate)
    );

    if(this.signedInUser)
    {
      console.log(this.signedInUser)
      let candidate:Candidate = {
        userId:this.signedInUser._id,
        username:this.signedInUser.userFullName,
        email:this.signedInUser.userEmail
      }
      console.log(candidate);
      jobCandidates.push(candidate);
      console.log(jobCandidates);
    }
    
    let updatedJob: Job | null = null;

    if (this.selectedJob)
      updatedJob = { ...this.selectedJob, candidates: jobCandidates };

    if (updatedJob) this.store.dispatch(updateJob({ job: updatedJob }));
  }

  updateSignedInUser(){
    let newJobsApplied:Job[] = [];
    this.signedInUser?.jobsApplied.forEach((job) => newJobsApplied.push(job));
    if(this.selectedJob)
      newJobsApplied.push(this.selectedJob);

    let updatedUser:User | null = null;

    if(this.signedInUser)
      updatedUser = {...this.signedInUser, jobsApplied:newJobsApplied};

    if(updatedUser)
    this.store.dispatch(updateUser({user:updatedUser}))
  }

  checkIfApplied(){
    if(this.selectedJob?.candidates)
      return this.selectedJob.candidates.map((candidate) => candidate.userId).includes(this.signedInUser?._id);
    return false;
  }

  applyPanelExpanded(){
    this.isSignedInUserAlreadyApplied = this.checkIfApplied();
  }

  applyForJob() {
    if(!this.isSignedInUserAlreadyApplied)
    {
      this.updateJob();
      this.updateSignedInUser();
    }

    this.isSignedInUserAlreadyApplied = true;
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
