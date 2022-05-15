import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private agentUrl: string;

  constructor(private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) {
    this.agentUrl = 'http://localhost:8080/api/';

  }

  login(phoneNumber: string, password: string): Observable<any> {
    return this.http.post<HttpResponse<any>>(this.agentUrl + 'login', {
      phoneNumber,
      password
    }, { observe: 'response' as 'response' });
  }

  changePassword(model: any) {
    return this.http.put(this.agentUrl + "account/agent/change-password", model, httpOptions);
  }

  refreshToken(token: string, headers: HttpHeaders) {
    return this.http.post(this.agentUrl + 'auth/refresh', {
      refresh_token: token
    }, { headers: headers });
  }


  getAgentName() {
    return this.tokenStorage.getAgent().name;
  }

  isLoggedIn() {
    return !(this.tokenStorage.getToken() === null);
  }

  isFirstLogin() {
    return this.tokenStorage.getIsFirstLogin();
  }


}
