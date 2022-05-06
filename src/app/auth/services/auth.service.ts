import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  agent: String
  constructor() {
    this.agent = "Bader Toumi"
  }

  isAgentLoggedIn() {
    console.log(!(this.agent === ""));
    return !(this.agent === "");
  }
}
