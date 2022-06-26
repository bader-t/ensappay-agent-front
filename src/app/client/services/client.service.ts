import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  private clientUrl: string;
  private cmiUrl: string;


  constructor(private http: HttpClient) {
    this.clientUrl = 'https://ensa-pay-2022.herokuapp.com/api/account/agent/';
    this.cmiUrl = 'https://ensa-pay-2022.herokuapp.com/cmi-rest/';
  }

  public getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(
      this.clientUrl + 'inactive-accounts'
    );
  }

  public confirm(client: Client) {
    return this.http.put(this.clientUrl + 'activate-account', client);
  }

  public deny(client: Client) {
    return this.http.put(this.clientUrl + 'reject-account', client);
  }

  public createBankAccount(user: any) {
    return this.http.post(this.cmiUrl + 'create-bank-account', user);
  }

}
