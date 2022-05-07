import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Agent } from 'src/app/shared/models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private agentSubject: BehaviorSubject<Agent>;
  // public agent: Agent;
  private agentUrl: string;

  agent = "";
  constructor(private http: HttpClient,private router: Router) {
    this.agentUrl = 'http://localhost:8080/api/auth/';
    this.agentSubject = new BehaviorSubject<Agent>(JSON.parse(localStorage.getItem('agent') || '{}'));
    // this.agent = this.agentSubject.value;

  }

  login(phone: string, password: string) {
    return this.http.post<Agent>(this.agentUrl + "login", { phone, password })
        .pipe(map(agent => {
            localStorage.setItem('agent', JSON.stringify(agent));
            this.agentSubject.next(agent);
            return agent;
        }));
  }

  isLoggedIn() {
    console.log(this.agent);
    return !(this.agent === "");
  }
  isPasswordNotReseted() {
    console.log(this.agent);
    return false;
  }

  logout(){
    this.agent = "";
    localStorage.removeItem('agent');
    this.router.navigate(['']);
  }
}
