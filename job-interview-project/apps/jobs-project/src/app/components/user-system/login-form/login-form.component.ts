import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent implements OnInit {
  hide=true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor() {}

  ngOnInit(): void {  
  }

  // TODO: Check for errors in one if statement and give "universal" answer for potential errors
  onLogin(){
    if(this.email.hasError('required')){
      console.log("You must enter email");
      return;
    }
    if(this.email.hasError('email')){
      console.log("Invalid mail address");
      return;
    }
    if(this.password.hasError('required'))
    {
      console.log("You must enter password");
      this.password.setValue('');
      return;
    }
    if(this.password.hasError('minlength'))
    {
      console.log(`Length must be greater than ${this.password.errors?.minlength?.requiredLength}`);
      this.password.setValue('');
      return;
    }
    console.log(this.email.value);
    console.log(this.password.value);
  }

}
