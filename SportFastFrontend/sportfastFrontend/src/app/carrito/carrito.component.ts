import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../services/carrito.service';
import { ItemCarrito } from '../modelos/itemcarrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
})
export class CarritoComponent implements OnInit {
  productos: ItemCarrito[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(items => {
      this.productos = items;
      this.total = this.carritoService.getTotal();
    });
  }

  eliminar(productoId: number) {
    this.carritoService.eliminarProducto(productoId);
  }

  pagar() {
  this.carritoService.pagarConStripe();
    this.carritoService.vaciarCarrito();
  }
}
