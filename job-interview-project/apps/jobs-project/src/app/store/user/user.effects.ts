import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.services';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private action$: Actions) {}


  signInEffect$ = createEffect(() =>
    this.action$.pipe(
        ofType(UserActions.signInUser),
        // Action is actually payload - props from action in this case signInUser
      concatMap((action) =>
        this.userService.signIn(action.userEmail, action.userPassword).pipe(
          map((userData) =>
            UserActions.signInUserSuccess({
              accessToken: userData?.accessToken,
              user: userData?.user,
            })),
            catchError((error) => of(UserActions.signInFailure({error:"Unauthorized"})))
        )
      )
    )
  );

  loadSignedInEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.loadSignedInUser),
      switchMap(() => 
        this.userService.getUser().pipe(
          map((user) => UserActions.loadSignedInUserSuccess({user:user})),
          // TODO: Dispatch another action to be able to modify UI
          catchError((error) => of(UserActions.signInFailure({error:"Unauthorized"})))
        )
      )
    ) 
  )

  signOutEffect$ = createEffect(() =>
    this.action$.pipe(
       ofType(UserActions.signOutUser),
       tap(() => localStorage.removeItem("JWT_TOKEN"))
    ),
    {dispatch:false}
  )

  updateEffect$ = createEffect(() => 
      this.action$.pipe(
        ofType(UserActions.updateUser),
        switchMap((action) =>
          this.userService.update(action.user).pipe(
            map((user) => UserActions.updateUserSuccess({user:user})),
            catchError(() => of({type:"Update Failed"}))
          )
        )
      )
  )

  signUpEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.signUpUser),
      switchMap((action) =>
        this.userService.signUp(action.user).pipe(
          map(() => UserActions.signUpUserSuccess()),
          catchError(() => of({type:"Signup Failed"}))
        )
      )
    )
  )

  loadByIdEffect$ = createEffect(() =>
          this.action$.pipe(
            ofType(UserActions.loadUserById),
            switchMap((action) =>
              this.userService.getById(action.id).pipe(
                map((user) => UserActions.loadUserByIdSuccess({user:user})),
                catchError(() => of({type:"Load by id failed"}))
              )
            )
          )
  )
}
