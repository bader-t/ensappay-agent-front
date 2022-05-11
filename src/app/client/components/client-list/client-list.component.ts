import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { AlertService } from 'src/app/shared/services/alert.service';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients?: Client[];

  constructor(private clientService: ClientService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllClients();
  }

  getAllClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (data: any) => {
        this.clients = data;
      },
      error: (e: any) => {
        this.alertService.error(e.error.message);
      },
      complete: () => {
      }

    })
  }

  refreshList(): void {
    this.getAllClients();
  }

  confirmAccount(client: Client): void {
    this.clientService.confirm(client).subscribe({
      next: (data: any) => {
        console.log('data', data);
        this.alertService.success("Compte enregistré avec succé");
        this.refreshList();
      },
      error: (e: any) => {
        this.alertService.error(e.error.message);
      },
      complete: () => {
      }
    });
  }

}
