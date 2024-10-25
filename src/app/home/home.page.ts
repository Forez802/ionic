import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categoria1: any[] = [];
  categoria2: any[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
      // Divide los productos entre dos categorías
      this.categoria1 = data.slice(0, Math.ceil(data.length / 2)); // Primera mitad de productos
      this.categoria2 = data.slice(Math.ceil(data.length / 2)); // Segunda mitad de productos
    });
  }
}