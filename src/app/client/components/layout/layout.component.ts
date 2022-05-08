import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent  {

  constructor(
    private router: Router,
    private authService: AuthService
) {
    // redirect to home if already logged in
    if (!this.authService) {
        this.router.navigate(['/']);
    }
}

}
