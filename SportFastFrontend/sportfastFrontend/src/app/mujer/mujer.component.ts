import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelos/producto';
import { Color } from '../modelos/color';
import { Talla } from '../modelos/talla';
import { CarritoService } from '../services/carrito.service';
import { ItemCarrito } from '../modelos/itemcarrito';

@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mujer.component.html',
  styleUrls: ['./mujer.component.css'],
})
export class MujerComponent implements OnInit {
  productos: Producto[] = [];
  busqueda = '';
  modalAbierto = false;
  productoSeleccionado: Producto | null = null;
  colorSeleccionado: Color | null = null;
  tallaSeleccionada: Talla | null = null;
  cantidad = 1;

  coloresDisponibles: Color[] = [];
  tallasDisponibles: Talla[] = [];
  mensajeStock: string = '';

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getPorCategoria('mujer').subscribe({
      next: (res) => {
        this.productos = res;
      },
      error: (err) => console.error('Error al cargar productos', err),
    });
  }

  get productosFiltrados(): Producto[] {
    if (!this.busqueda.trim()) return this.productos;
    return this.productos.filter((p) =>
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  abrirModal(producto: Producto): void {
    this.productoSeleccionado = producto;
    this.coloresDisponibles = producto.colores || [];
    this.tallasDisponibles = producto.tallas || [];
    this.colorSeleccionado = null;
    this.tallaSeleccionada = null;
    this.cantidad = 1;
    this.mensajeStock = '';
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.productoSeleccionado = null;
    this.coloresDisponibles = [];
    this.tallasDisponibles = [];
  }

  actualizarCantidad() {
    if (this.cantidad > (this.productoSeleccionado?.cantidad ?? 0)) {
      this.mensajeStock = 'No puedes añadir más de la cantidad disponible.';
      this.cantidad = this.productoSeleccionado?.cantidad ?? 1;
    } else {
      this.mensajeStock = '';
    }
  }

  anadirACarrito(): void {
    if (!this.productoSeleccionado || !this.tallaSeleccionada || !this.colorSeleccionado) {
      return;
    }
    if (this.cantidad > this.productoSeleccionado.cantidad) {
      this.mensajeStock = 'No puedes añadir más de la cantidad disponible.';
      return;
    }
    const item: ItemCarrito = {
      nombre: this.productoSeleccionado.nombre,
      pedido_id: 0,
      producto_id: this.productoSeleccionado.id!,
      cantidad: this.cantidad,
      precio_unitario: this.productoSeleccionado.precio,
      color: this.colorSeleccionado.nombre,
      talla: this.tallaSeleccionada.nombre,
      total: this.cantidad * this.productoSeleccionado.precio,
    };
    this.carritoService.agregarProducto(item);

    const nuevaCantidad = this.productoSeleccionado.cantidad - this.cantidad;
    this.productoService.actualizarCantidad(this.productoSeleccionado.id!, nuevaCantidad)
      .subscribe({
        next: () => {
          this.cargarProductos();
          this.cerrarModal();
        },
        error: () => {
          this.mensajeStock = 'Error al actualizar el stock.';
        }
      });
  }
}
