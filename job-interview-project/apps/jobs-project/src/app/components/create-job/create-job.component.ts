import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Job } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/job/app.state';
import { createJob } from '../../store/job/jobs.actions';

@Component({
  selector: 'job-interview-project-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {
  @ViewChild('titleInput') titleInput: ElementRef | null = null;
  @ViewChild('descriptionText') descriptionText: ElementRef | null = null;
  @ViewChild('lookingForText') lookingForText: ElementRef | null = null;
  @ViewChild('weOfferText') weOfferText: ElementRef | null = null;
  @ViewChild('datePicker') datePicker: ElementRef | null = null;
  @ViewChild('pictureUrlInput') pictureUrl: ElementRef | null = null;
  @ViewChild('companyNameInput') companyNameInput: ElementRef | null = null;
  @ViewChild('locationInput') locationInput: ElementRef | null = null;

  selectedSeniority: string | null = null;
  selectedJobType: string | null = null;

  newJob: Job | null = null;
  minDate = new Date(Date.now());

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  saveJob() {
    if (this.selectedSeniority && this.selectedJobType) {
      this.newJob = {
        jobTitle: this.titleInput?.nativeElement.value,
        jobType: this.selectedJobType,
        seniority: this.selectedSeniority,
        jobPicture: this.pictureUrl?.nativeElement.value,
        companyName: this.companyNameInput?.nativeElement.value,
        description: this.descriptionText?.nativeElement.value,
        expiryDate: this.datePicker?.nativeElement.value,
        lookingFor: this.lookingForText?.nativeElement.value,
        companyOffers: this.weOfferText?.nativeElement.value,
        location: this.locationInput?.nativeElement.value,
      };

      if (this.newJob) this.store.dispatch(createJob({ job: this.newJob }));

      console.log(this.newJob);
    }
  }
}
