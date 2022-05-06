import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Client } from '../../model/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  loading = false;
  submitted = false;

  clientForm = new FormGroup({
    productType: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
  }

  get f() { return this.clientForm.controls; }

  onSubmit() {
    console.log(this.clientForm);
    this.submitted = true;
    if (this.clientForm.invalid) {
      return;
    }
    this.loading = true;
    this.createUser();
  }

  private createUser() {

    this.clientService.register(this.clientForm.value).subscribe(
      {next: (v) => console.log(v),
    error: (e) => console.error(e),
    complete: () => console.info('complete')}
    );;
}

}
