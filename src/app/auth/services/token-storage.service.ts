import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  logout(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem('access_token');
    window.localStorage.setItem('access_token', token);

    const agent = this.getAgent();
    if (agent.id) {
      this.saveAgent({ ...agent, accessToken: token });
    }
  }


  public setIsFirstLogin(isFirstLogin: string): void {
    window.localStorage.removeItem('firstlogin');
    window.localStorage.setItem('firstlogin', isFirstLogin);
  }

  public getIsFirstLogin(): boolean | null {
    return window.localStorage.getItem('firstlogin') === 'true';
  }


  public getToken(): string | null {
    return window.localStorage.getItem('access_token');
  }



  public saveRefreshToken(token: string): void {
    window.localStorage.removeItem('refresh_token');
    window.localStorage.setItem('refresh_token', token);
  }

  public getRefreshToken(): string | null {
    return window.localStorage.getItem('refresh_token');
  }

  public saveAgent(agent: any): void {
    window.localStorage.removeItem('agentProfile');
    window.localStorage.setItem('agentProfile', JSON.stringify(agent));
  }

  public getAgent(): any {
    const agent = window.localStorage.getItem('agentProfile');
    if (agent) {
      return JSON.parse(agent);
    }
    return {};
  }
}
