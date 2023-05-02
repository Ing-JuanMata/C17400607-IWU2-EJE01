import { Component, OnDestroy } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  private products$: Subscription;
  public products: Product[] = [];

  public filterProducts = [...this.products];

  constructor(private productService: ProductService) {
    this.products$ = productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filterProducts = [...this.products];
    });
  }

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

  onSearchChange(event: any) {
    this.filterProducts = this.products.filter((product) =>
      product.type.toLowerCase().startsWith(event.detail.value.toLowerCase())
    );
  }

  ngOnDestroy(): void {
    this.products$.unsubscribe();
  }
}
