import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loading = false;
  submitted = false;


  changePasswordForm = new FormGroup({
    password: new FormControl('', Validators.required)
  });
  constructor(private alertService: AlertService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.changePasswordForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService.changePassword(this.changePasswordForm.value).subscribe({
      next: (v: any) => {
        this.alertService.success(v);
        this.loading = false;
      },
      error: (e: any) => {
        this.alertService.error(e.statusText);
        this.loading = false;
      },
      complete: () => {
        this.alertService.success("Votre mot de passe a été changé avec succé");
        this.router.navigate([''])
      }
    })

  }

  get f() { return this.changePasswordForm.controls; }

}
