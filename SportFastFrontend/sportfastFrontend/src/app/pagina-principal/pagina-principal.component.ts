import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelos/producto';
import { CarritoService } from '../services/carrito.service';
import { ItemCarrito } from '../modelos/itemcarrito';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagina-principal.component.html',
})

export class PaginaPrincipalComponent implements OnInit {
  productos: Producto[] = [];
  busqueda: string = '';

  modalAbierto: boolean = false;
  productoSeleccionado?: Producto;
  colorSeleccionado?: any;
  tallaSeleccionada?: any;
  cantidad: number = 1;
  mensajeStock: string = '';

  coloresDisponibles = [
    { id: 1, nombre: 'Rojo' },
    { id: 2, nombre: 'Azul' },
    { id: 3, nombre: 'Negro' },
    { id: 4, nombre: 'Blanco' },
  ];

  tallasDisponibles = [
    { id: 1, nombre: 'S' },
    { id: 2, nombre: 'M' },
    { id: 3, nombre: 'L' },
    { id: 4, nombre: 'XL' },
  ];

  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.getTodos().subscribe({
      next: (productos) => {
        this.productos = productos;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      }
    });
  }

  get productosFiltrados(): Producto[] {
    if (!this.busqueda.trim()) return this.productos;

    const filtro = this.busqueda.toLowerCase();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro) ||
      (producto.descripcion?.toLowerCase().includes(filtro) ?? false)
    );
  }

  abrirModal(producto: Producto): void {
    this.productoSeleccionado = producto;
    this.colorSeleccionado = null;
    this.tallaSeleccionada = null;
    this.cantidad = 1;
    this.mensajeStock = '';
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.productoSeleccionado = undefined;
  }

  anadirACarrito(): void {
    if (!this.productoSeleccionado || !this.tallaSeleccionada || !this.colorSeleccionado) {
      return;
    }
    if (this.productoSeleccionado.cantidad === 0) {
      alert('Producto agotado');
      return;
    }
    if (this.cantidad > this.productoSeleccionado.cantidad) {
      this.mensajeStock = `No hay suficiente stock. Stock disponible: ${this.productoSeleccionado.cantidad}`;
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
    this.productoSeleccionado.cantidad -= this.cantidad;
    const idx = this.productos.findIndex(p => p.id === this.productoSeleccionado?.id);
    if (idx !== -1) {
      this.productos[idx].cantidad = this.productoSeleccionado.cantidad;
    }
    this.cerrarModal();
  }
}
