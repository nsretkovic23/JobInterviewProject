import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Job } from '@job-interview-project/api-interfaces';

@Component({
  selector: 'job-card-component',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {

  @Input() job:Job | null = null;
  @Output() onClick:EventEmitter<Job> = new EventEmitter<Job>();

  constructor() {}

  ngOnInit(): void {
  }

  //applyClick() -- kliknut / vodi na stranicu eventa
}
