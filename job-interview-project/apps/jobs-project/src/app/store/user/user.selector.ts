import { createSelector } from "@ngrx/store";
import { AppState } from "../job/app.state";
import { UserState } from "./user.reducer";


export const selectUserFeature = createSelector(
    (state:AppState) => state.user,
    (user) => user
)

export const selectSignedInUser = createSelector(
    selectUserFeature,
    (state:UserState) => state.user
)

export const selectTemporaryUser = createSelector(
    selectUserFeature,
    (state:UserState) => state.tempUser
)