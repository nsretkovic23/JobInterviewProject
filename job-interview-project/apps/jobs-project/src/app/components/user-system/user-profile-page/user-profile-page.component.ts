import { Component, OnInit } from '@angular/core';
import { User } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../../store/job/app.state';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { selectSignedInUser, selectTemporaryUser } from '../../../store/user/user.selector';
import { loadUserById } from '../../../store/user/user.actions';

@Component({
  selector: 'job-interview-project-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {
  
  userId:string|null = null;
  userObs:Observable<User | null> = of(null);
  user:User | null = null;

  
  constructor(private store:Store<AppState>, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.userId = params.get('id');

      if(this.userId)
        this.store.dispatch(loadUserById({id:this.userId}))

      this.userObs = this.store.select(selectTemporaryUser);

      this.userObs.subscribe((user) => {
        if(user) this.user=user;
      })
    })
  }

}
