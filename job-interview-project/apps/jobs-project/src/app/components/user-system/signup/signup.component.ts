import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs/operators';

@Component({
  selector: 'job-interview-project-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  hidePassword = true;
  @ViewChild('autosize') autosizeUserDesc: CdkTextareaAutosize | undefined;

  constructor(
    private _ngZone: NgZone,
    private userFormBuilder: FormBuilder,
    private companyFormBuilder: FormBuilder,
    private signupSnackBar:MatSnackBar
  ) {}

  ngOnInit(): void {}

  userSignupForm: FormGroup = this.userFormBuilder.group({
    userFullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    // TODO: Change this so user can import his own picture instead of placing the link
    userPicture: new FormControl(
      'https://icon-library.com/images/account-icon-png/account-icon-png-2.jpg'
    ),
    userDescription: new FormControl('', [Validators.required]),
  });

  companySignupForm: FormGroup = this.companyFormBuilder.group({
    companyFullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    companyEmail: new FormControl('', [Validators.required, Validators.email]),
    companyPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    // TODO: Change this so user can import his own picture instead of placing the link
    companyPicture: new FormControl(
      'https://img.favpng.com/4/24/8/computer-icons-building-planacy-ab-architectural-engineering-biurowiec-png-favpng-4tXAHFuj3fEV7na0R5XfKBBz3.jpg'
    ),
    companyDescription: new FormControl('', [Validators.required]),
    companyLocation: new FormControl('', [Validators.required]),
  });

  openSnackBar(){
    this.signupSnackBar.open("Check Your Inputs!", "OK", {duration:2000});
  }

  onUserSignUp() {
    if (!this.userSignupForm.valid) {
      this.openSnackBar();
      return;
    }
    console.log(this.userSignupForm.value);
  }

  onCompanySignUp() {
    if (!this.companySignupForm.valid) {
      this.openSnackBar();
      return;
    }
    console.log(this.companySignupForm.value);
  }

  // HACK: Solution found and copy-pasted for auto resizing textarea in AngMaterials docs
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      if (this.autosizeUserDesc) this.autosizeUserDesc.resizeToFitContent(true);
    });
  }
}
