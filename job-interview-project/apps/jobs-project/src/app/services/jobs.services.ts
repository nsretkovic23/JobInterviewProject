import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '@job-interview-project/api-interfaces';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Job[]>(`${environment.apiURL}/jobs`)
      .pipe(catchError(errorHandler));
  }

  getById(id: string) {
    return this.httpClient
      .get<Job[]>(`${environment.apiURL}/jobs/${id}`)
      .pipe(catchError(errorHandler));
  }

  createJob(job: Job) {
    return this.httpClient
      .post<Job>(`${environment.apiURL}/jobs`, job)
      .pipe(catchError(errorHandler));
  }

  updateJob(job: Job) {
    return this.httpClient
      .put<Job>(`${environment.apiURL}/jobs/${job._id}`, job)
      .pipe(catchError(errorHandler));
  }

  deleteJob(id: string) {
    return this.httpClient
      .delete<Job>(`${environment.apiURL}/jobs/${id}`)
      .pipe(catchError(errorHandler));
  }
}

const errorHandler = (error: HttpErrorResponse) => {
  const errorMessage =
    error.status === 0
      ? `Can't connect to API ${error.error}`
      : `Backend returned code ${error.status}`;

  return throwError(errorMessage);
};
