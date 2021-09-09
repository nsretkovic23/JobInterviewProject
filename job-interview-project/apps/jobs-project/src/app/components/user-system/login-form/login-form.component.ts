import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '@job-interview-project/api-interfaces';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { UserService } from '../../../services/user.services';
import { AppState } from '../../../store/job/app.state';
import { signInUser } from '../../../store/user/user.actions';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(private loginSnackBar: MatSnackBar, private userService:UserService, private store:Store<AppState>) {}

  ngOnInit(): void {}

  openSnackBar() {
    this.loginSnackBar.open('Check Your Inputs!', 'OK', { duration: 2000 });
  }

  onLogin() {
    if (
      this.email.hasError('required') ||
      this.email.hasError('email') ||
      this.password.hasError('required') ||
      this.password.hasError('minlength')
    ) {
      this.openSnackBar();
      return;
    }
    console.log("clicked login")

   this.store.dispatch(signInUser({userEmail:this.email.value, userPassword:this.password.value}))
    
  }
}
