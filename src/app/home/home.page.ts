import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products = [
    { name: 'Producto 1', price: 20, type: 'Abarrotes' },
    { name: 'Jabon Zote', price: 30, type: 'Limpieza' },
    { name: 'Croquetas 50kg', price: 400, type: 'Mascotas' },
  ];

  constructor() {}

  getColor(type: string): string {
    switch (type) {
      case 'Abarrotes':
        return 'primary';
      case 'Limpieza':
        return 'success';
      case 'Mascotas':
        return 'warning';
      default:
        return 'primary';
    }
  }
}
