import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-card-component',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss'],
})
export class FilterCardComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  filterClicked(filterJobsString: string) {
    this.filterEvent.emit(filterJobsString);
  }
}
