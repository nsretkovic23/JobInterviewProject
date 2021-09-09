import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { User } from "@job-interview-project/api-interfaces";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { AppState } from "../app/store/job/app.state";
import { loadSignedInUser } from "../app/store/user/user.actions";
import { selectSignedInUser } from "../app/store/user/user.selector";


@Injectable({
    providedIn:'root'
})
export class UserAuthGuard implements CanActivate {

    constructor(private store:Store<AppState>){}
    
     canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       // let signedInUser:User|null = null;
       // let bool:boolean;
       // this.store.select(selectSignedInUser).pipe(
       //     map((user) => {
       //         if(user)
       //             return true;
       //         else
       //             return false;
       //     })
       // ).toPromise()
       // .then(value => {bool = value});
//
       // return bool;

       return true;
        
      // return this.store.select(selectSignedInUser);
    }
}