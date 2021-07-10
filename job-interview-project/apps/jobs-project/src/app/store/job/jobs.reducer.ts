import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Job } from "@job-interview-project/api-interfaces";
import * as Actions from './jobs.actions';
import { state } from "@angular/animations";

export interface JobsState extends EntityState<Job>{
    selectedJobId : string | null;
}

const adapter : EntityAdapter<Job> = createEntityAdapter<Job>({
    selectId: (job:Job) => job._id ? job._id : ""
});

const initialState : JobsState = adapter.getInitialState({
    selectedJobId: null,
});

export const jobsReducer = createReducer(
    initialState,
    on(Actions.loadJobsSuccess, (state, {jobs}) => adapter.setAll(jobs, state)),
    on(Actions.selectJob, (state, {jobId}) => ({
        ...state,
        selectedJobId:jobId
    })
    )

)