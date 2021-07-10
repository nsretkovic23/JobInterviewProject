import { createAction, props } from "@ngrx/store";
import { Job } from "@job-interview-project/api-interfaces";

export const loadJobs = createAction(
    "Load jobs"
);

export const loadJobsSuccess = createAction(
    "Load jobs Success",
    props<{jobs:Job[]}>()
)

export const createJob = createAction(
    "Create Job",
    props<{job:Job}>()
)

export const selectJob = createAction(
    "Select Job",
    props<{jobId:string}>()
)