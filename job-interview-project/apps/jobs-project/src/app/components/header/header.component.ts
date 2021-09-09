import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/job/app.state';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() signedInUser : User | null;
  @Output() signOutTriggered = new EventEmitter<boolean>();

  constructor() {this.signedInUser = null}



  ngOnInit(): void {}

  logout(){
    this.signOutTriggered.emit(true);
  }
}
