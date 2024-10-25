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
  cart: any[] = []; // Inicializa el carrito

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
      // Divide los productos entre dos categorías
      this.categoria1 = data.slice(0, Math.ceil(data.length / 2)); // Primera mitad de productos
      this.categoria2 = data.slice(Math.ceil(data.length / 2)); // Segunda mitad de productos

      // Cargar el carrito desde el almacenamiento local
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    });
  }

  addToCart(producto: any) {
    // Verifica si el producto ya está en el carrito
    const existingProduct = this.cart.find(item => item.id === producto.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Aumenta la cantidad si ya existe
    } else {
      this.cart.push({ ...producto, quantity: 1 }); // Agrega el producto con cantidad inicial
    }
    this.saveCart(); // Guarda el carrito en el almacenamiento local
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1); // Elimina el producto del carrito
    this.saveCart(); // Actualiza el carrito en el almacenamiento local
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0); // Calcula el total
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Guarda el carrito en el almacenamiento local
  }
}
