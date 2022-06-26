import { Component, OnInit } from '@angular/core';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Client } from 'src/app/shared/models/client.model';
import { AlertService } from 'src/app/shared/services/alert.service';

import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  currentClient: Client = {
    id: 0,
    name: "",
    surname: "",
    phone: "",
    email: "",
    productType: "",
    accountStatus: "",
  };

  currentIndex = -1;
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  faCheck = faCheck;
  faXmark = faXmark;

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

  setActiveClient(client: Client, index: number): void {
    console.log('client', client);
    this.currentClient = client;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.getAllClients();
  }

  confirmAccount(client: Client): void {
    this.clientService.confirm(client).subscribe({
      next: (data: any) => {
        this.alertService.success("Compte enregistré avec succé");
        this.refreshList();
        this.createBankAccount({ phoneNumber: data.phoneNumber, name: data.clientProfile.name + " " + data.clientProfile.surname })
      },
      error: (e: any) => {
        this.alertService.error(e.error.message);
      },
      complete: () => {
      }
    });
  }

  createBankAccount(user: any) {
    this.clientService.createBankAccount(user).subscribe(
      {
        next: (data: any) => {
        },
        error: (e: any) => {
          this.alertService.error(e.error.message);
        },
        complete: () => {
        }
      }
    )

  }

  denyAccount(client: Client): void {
    this.clientService.deny(client).subscribe({
      next: (data: any) => {
        this.alertService.success("Compte refusé avec succé");
        this.refreshList();
      },
      error: (e: any) => {
        this.alertService.error(e.error.message);
      },
      complete: () => {
      }
    });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.getAllClients();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.getAllClients();
  }

}
