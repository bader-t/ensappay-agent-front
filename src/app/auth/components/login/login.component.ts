import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';

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
  constructor(private alertService: AlertService, private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.f['phoneNumber'].value, this.f['password'].value).subscribe(
      {
        next: (data: any) => {
          this.tokenStorage.saveToken(data.headers.get('access_token'));
          this.tokenStorage.saveRefreshToken(data.headers.get('refresh_token'));
          this.tokenStorage.setIsFirstLogin(data.body.firstLogin);
          this.tokenStorage.saveAgent(data.body.agentProfile);

        },
        error: (e: any) => {
          this.alertService.error("Mauvais login ou mot de passe!")
        },
        complete: () => {
          this.router.navigate(['']);
        }
      }
    );
  }

}
