import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  productos: Producto[] = [];
  nuevo: Producto = this.resetNuevo();
  editando: Producto | null = null;

  constructor
  (
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.productoService.getAdminProductos().subscribe({
      next: res => this.productos = res
    });
  }

  guardar(): void {
    if (!this.nuevo.nombre || this.nuevo.precio <= 0 || this.nuevo.cantidad <= 0) {
      alert('Por favor completa los campos obligatorios correctamente.');
      return;
    }

    if (!this.nuevo.categoria_id) {
      alert('Selecciona una categoría');
      return;
    }

    this.productoService.crearProducto(this.nuevo).subscribe(() => {
      this.nuevo = this.resetNuevo();
      this.cargar();
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productoService.eliminarProducto(id).subscribe(() => this.cargar());
    }
  }

  editar(p: Producto): void {
    this.editando = { ...p };
  }

  actualizar(): void {
    if (!this.editando) return;

    this.productoService.actualizarProducto(this.editando.id!, this.editando).subscribe(() => {
      this.editando = null;
      this.cargar();
    });
  }

  cancelar(): void {
    this.editando = null;
  }

  resetNuevo(): Producto {
    return {
      nombre: '',
      precio: 0,
      cantidad: 0,
      categoria_id: null,
      descripcion: '',
      imagen: '',
      colores: [],
      tallas: []
    };
  }
  volverAlInicio() {
  this.router.navigate(['/']); 
}
}
