import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Agent } from 'src/app/shared/models/agent.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private agentSubject: BehaviorSubject<Agent>;
  public agent: Observable<Agent>;
  private agentUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.agentUrl = 'http://localhost:8080/api/';
    this.agentSubject = new BehaviorSubject<Agent>(JSON.parse(localStorage.getItem('agent') || '{}'));
    this.agent = this.agentSubject.asObservable();

  }

  public get agentValue(): Agent {
    return this.agentSubject.value;
  }

  login(phoneNumber: string, password: string) {
    return this.http.post<Agent>(this.agentUrl + "login", { phoneNumber, password })
      .pipe(map(agent => {
        localStorage.setItem('agent', JSON.stringify(agent));
        this.agentSubject.next(agent);
        return agent;
      }));
  }

  changePassword(model: any) {
    return this.http.post(this.agentUrl + "account/client/change-password", model);
  }



  isLoggedIn() {
    console.log(!(this.agentSubject === null));
    // return !(this.agentSubject === null);
    return false;
  }
  isPasswordNotChanged() {
    return this.agentValue.passwordNotChanged;
    // return true;
  }

  logout() {
    localStorage.removeItem('agent');
    this.agentSubject.next(null!);
    this.router.navigate(['']);
  }
}
