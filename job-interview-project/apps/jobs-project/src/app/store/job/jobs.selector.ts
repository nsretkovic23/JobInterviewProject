import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { JobsState } from "./jobs.reducer";
import { Job } from "@job-interview-project/api-interfaces";

export const selectJobsFeature = createSelector(
    (state:AppState) => state.jobs,
    (jobs) => jobs
);

export const selectAllJobs = createSelector(
    selectJobsFeature,
    (state:JobsState) => Object
        .values(state.entities)
        .filter(job => job != null)
        .map(job => <Job>job)
);

export const selectAllJobsDictionary = createSelector (
    selectJobsFeature,
    (state:JobsState) => state.entities
)

export const selectSelectedJobId = createSelector(
    selectJobsFeature,
    (state: JobsState) => state.selectedJobId
)

export const selectSelectedJob = createSelector(
    selectAllJobsDictionary,
    selectSelectedJobId,
    (jobs, selectedJobId) => selectedJobId && jobs ? jobs[selectedJobId] : null
)
