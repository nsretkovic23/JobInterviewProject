import { Component, OnInit } from '@angular/core';
import { AppState } from '../../store/job/app.state';

@Component({
  selector: 'job-catalog-component',
  templateUrl: './job-catalog.component.html',
  styleUrls: ['./job-catalog.component.scss']
})
export class JobCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
