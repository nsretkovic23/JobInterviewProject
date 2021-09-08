import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private loginSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  // TODO: Open one snack bar if there is invalid input and open one more if server checked inputs and there is no user
  openSnackBar() {
    this.loginSnackBar.open('Check Your Inputs!', 'OK', { duration: 2000 });
  }

  // TODO: Check for errors in one if statement and give "universal" answer for potential errors
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
    console.log(this.email.value);
    console.log(this.password.value);
  }
}
