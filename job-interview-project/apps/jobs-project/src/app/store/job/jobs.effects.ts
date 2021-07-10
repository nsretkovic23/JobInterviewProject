import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { JobsService } from "../../services/jobs.services";
import { AppState } from "./app.state";
import * as JobsActions from './jobs.actions';

@Injectable()
export class JobsEffects {
    
    constructor(private jobsService :JobsService, private action$ : Actions){}

    loadEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(JobsActions.loadJobs),
            mergeMap(() => this.jobsService.getAll()
                .pipe(
                    map((jobs) => (JobsActions.loadJobsSuccess({jobs}))),
                    catchError(() => of({type:"loading jobs error"}))
                )
            )
        )
    )

    saveEffect$ = createEffect(() =>
        this.action$.pipe(
            ofType(JobsActions.createJob),
            switchMap((action) => this.jobsService.createJob(action.job) 
            .pipe(       
                mergeMap(() => this.jobsService.getAll()
                .pipe(
                    map((jobs) => (JobsActions.loadJobsSuccess({jobs}))),
                    catchError(() => of({type:"loading jobs error"}))
                        )
                    )
                )
            )        
        )
    )
}