import { Injectable } from '@angular/core';
import * as UserActions from '../../user/user.actions';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouteEffects {
  constructor(private action$: Actions, private route: Router) {}

  goHomeEffect$ = createEffect(
    () =>
      this.action$.pipe(
        // TODO: Add more actions that leads to changing to home route
        ofType(UserActions.signInUserSuccess),
        tap(() => this.route.navigate(['/']))
      ),
    { dispatch: false }
  );

  signOutEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(UserActions.signOutUser),
        tap(() =>
          this.route.navigate(['/']).then(() => window.location.reload())
        )
      ),
    { dispatch: false }
  );

  signUpEffect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(UserActions.signUpUserSuccess),
        tap(() =>
          this.route.navigate(['/signin'])
        )
      ),
    { dispatch: false }
  );

  refreshEffect$ = createEffect(
    () => 
      this.action$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(() => window.location.reload())
      ),
      {dispatch:false}
  )
}
