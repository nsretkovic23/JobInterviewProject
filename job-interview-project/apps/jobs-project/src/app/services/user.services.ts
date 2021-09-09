import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@job-interview-project/api-interfaces';
import { of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  signIn(userEmail: string, userPassword: string) {
    return this.httpClient.post<any>(`${environment.apiURL}/auth/user/signin`, {
      userEmail,
      userPassword,
    })
    .pipe(
      switchMap((data) => {
        if(data){
          localStorage.setItem("JWT_TOKEN", data?.accessToken);
          return of(data);
        }
        else{
          return throwError("Unable to login")
        }
      }),
      catchError(errorHandler)
      );
  }

  signUp(user:User){
      return this.httpClient.post<User>(`${environment.apiURL}/auth/user/signup`, user)
      .pipe(catchError(errorHandler));
  }

  getUser(){
    return this.httpClient.get<User>(`${environment.apiURL}/auth/user/me`,{
      headers: new HttpHeaders({
        "Authorization":`Bearer ${localStorage.getItem("JWT_TOKEN")}` 
      })
    })
    .pipe(catchError(errorHandler))
  }

  getById(id:string){
    return this.httpClient.get<User>(`${environment.apiURL}/user/id/${id}`)
    .pipe(catchError(errorHandler))
  }

  update(user:User){
    return this.httpClient.put<User>(`${environment.apiURL}/user/${user._id}`, user)
      .pipe(catchError(errorHandler))
  }
}

const errorHandler = (error: HttpErrorResponse) => {
    const errorMessage =
      error.status === 0
        ? `Can't connect to API ${error.error}`
        : `Backend returned code ${error.status}`;
  
    return throwError(errorMessage);
  };