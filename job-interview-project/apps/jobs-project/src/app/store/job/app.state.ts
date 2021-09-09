import { UserState } from "../user/user.reducer";
import { JobsState } from "./jobs.reducer";

export interface AppState {
    jobs:JobsState,
    user:UserState
}