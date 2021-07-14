import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidate } from '@job-interview-project/api-interfaces';

@Component({
  selector: 'candidates-dialog-component',
  templateUrl: './candidates-dialog.component.html',
  styleUrls: ['./candidates-dialog.component.scss'],
})
export class CandidatesDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Candidate[]) {}

  ngOnInit(): void {}
}
