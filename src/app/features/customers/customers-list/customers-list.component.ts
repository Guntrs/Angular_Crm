import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { NgIf, NgFor } from '@angular/common'; // <-- IMPORTA ESTO

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [NgIf, NgFor], // <-- AGREGA AQUÍ
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any[] = [];
  loading = false;
  error = '';

  constructor(private customersService: CustomersService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.loading = true;
    this.customersService.getCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar clientes';
        this.loading = false;
      }
    });
  }
}
