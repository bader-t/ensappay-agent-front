import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clientUrl: string;


  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/api/account/agent/';
  }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(
      this.clientUrl + 'inactive-clients'
    );
  }
}
