import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private clientUrl: string;
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/api/account/';
  }

  public register(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientUrl + 'register', client, {headers: this.headers});
  }
}
