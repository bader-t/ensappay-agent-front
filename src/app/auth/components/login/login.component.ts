import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = new FormGroup({
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private alertService: AlertService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    this.authService.login(this.f['phoneNumber'].value, this.f['password'].value).subscribe(
      {
        next: (v: any) => {
          this.alertService.success(v);
        },
        error: (e: any) => {
          this.alertService.error(e.statusText);
        },
        complete: () => { this.alertService.success("Succé") }
      }
    );

    if (this.loginForm.invalid) {
      return;
    }
  }

}
