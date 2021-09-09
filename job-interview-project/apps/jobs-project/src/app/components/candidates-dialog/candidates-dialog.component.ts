import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Candidate } from '@job-interview-project/api-interfaces';

@Component({
  selector: 'candidates-dialog-component',
  templateUrl: './candidates-dialog.component.html',
  styleUrls: ['./candidates-dialog.component.scss'],
})
export class CandidatesDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Candidate[], private router:Router, private dialogRef: MatDialogRef<CandidatesDialogComponent>) {}

  ngOnInit(): void {}

  routeToUser(id:string | undefined){
    this.dialogRef.close();
    if(id)
      this.router.navigate([`/user/${id}`]);
  }
}
