import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '@job-interview-project/api-interfaces';
import * as Actions from './user.actions';

export interface UserState{
    user:User | null,
    tempUser:User|null,
    error:any
}

const initialState:UserState = {
    user : null,
    tempUser:null,
    error: null
};

export const userReducer = createReducer(
    initialState,
    on(Actions.signInUserSuccess, (state, {user}) => ({
        ...state,
        user : user,
        error:null
    })),

    on(Actions.loadSignedInUserSuccess, (state, {user}) => ({
        ...state,
        user:user,
        error:null
    })),

    on(Actions.signInFailure, (state, {error}) =>({
        ...state,
        user : null,
        error:error
    })),
    on(Actions.setAccessToken, (state, {accessToken}) =>({
        ...state,
        accessToken:accessToken
    })),

    on(Actions.signOutUser, (state) =>({
        ...state,
        user : null,
        error:null
    })),

    on(Actions.updateUserSuccess, (state, {user}) => ({
        ...state,
        user:user,
        error:null
    })),

    on(Actions.loadUserByIdSuccess, (state, {user}) =>({
        ...state,
        tempUser:user
    }))
)