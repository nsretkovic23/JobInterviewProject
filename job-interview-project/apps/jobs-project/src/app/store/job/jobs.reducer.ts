import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Job } from "@job-interview-project/api-interfaces";
import * as Actions from './jobs.actions';

export interface JobsState extends EntityState<Job>{
    selectedJobId : string | null;
}

const adapter : EntityAdapter<Job> = createEntityAdapter<Job>({
    selectId: (job:Job) => {
        if(job._id) //this is because _id is optional while creating job object(interface), mongo actually creates id for us
            return job._id
        else
            return ""
    }
});

const initialState : JobsState = adapter.getInitialState({
    selectedJobId: null,
});

export const jobsReducer = createReducer(
    initialState,
    on(Actions.loadJobsSuccess, (state, {jobs}) => adapter.setAll(jobs, state))

)