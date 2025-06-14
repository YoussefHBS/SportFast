import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../modelos/producto';


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

  constructor(private productoService: ProductoService) {}

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
    this.modalAbierto = true;
  }

  cerrarModal(): void {
    this.modalAbierto = false;
    this.productoSeleccionado = undefined;
  }

  anadirACarrito(): void {
    if (!this.colorSeleccionado || !this.tallaSeleccionada || this.cantidad < 1) {
      alert('Por favor, selecciona color, talla y cantidad válida.');
      return;
    }

    // Aquí podrías usar un servicio de carrito
    console.log('Añadiendo al carrito:', {
      producto: this.productoSeleccionado,
      color: this.colorSeleccionado,
      talla: this.tallaSeleccionada,
      cantidad: this.cantidad
    });

    alert('Producto añadido al carrito.');
    this.cerrarModal();
  }
}
