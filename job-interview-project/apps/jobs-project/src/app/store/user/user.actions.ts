import { createAction, props } from '@ngrx/store';
import { User } from '@job-interview-project/api-interfaces';

export const signUpUser = createAction('[USER] Sign Up', props<{user:User}>());

export const signUpUserSuccess = createAction('[USER EFF] Sign Up Success');

export const signInUser = createAction('[LOGIN COMPONENT] Sign In', props<{userEmail:string, userPassword:string}>());

export const signOutUser = createAction('[HEADER COMP] Sign Out')

export const signInUserSuccess = createAction('[USER EFF] Sign In Success', props<{accessToken:string, user:User}>());

export const signInFailure = createAction('[USER EFF] SignIn Failure', props<{error:any}>())

export const setAccessToken = createAction('[USER] Set Access Token', props<{accessToken:string}>());

export const loadSignedInUser = createAction('[APP COMPONENT] Load SignedIn User');

export const loadSignedInUserSuccess = createAction('[USER EFF] Load SignedIn User Success', props<{user:User}>())

export const loadUserById = createAction('[USER PROFILE COMPONENT] Load User By ID', props<{id:string}>())

export const loadUserByIdSuccess = createAction('[USER EFF] Load User By Id Success', props<{user:User}>())

export const updateUser = createAction('[USER] Update User', props<{user:User}>())

export const updateUserSuccess = createAction('[USER EFF] Update User Success', props<{user:User}>())


