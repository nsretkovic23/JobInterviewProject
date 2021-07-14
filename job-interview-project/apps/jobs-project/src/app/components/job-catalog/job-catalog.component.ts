import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-catalog-component',
  templateUrl: './job-catalog.component.html',
  styleUrls: ['./job-catalog.component.scss'],
})
export class JobCatalogComponent implements OnInit {
  filter: string = 'All';

  constructor() {}

  ngOnInit(): void {}

  filterJobs(filterString: string) {
    this.filter = filterString;
  }
}
