import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loading = false;
  submitted = false;


  resetPasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    if (this.resetPasswordForm.invalid) {
      return;
    }

  }

  get f(){return this.resetPasswordForm.controls;}

}
