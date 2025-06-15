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

  mostrarModalEliminar: boolean = false;
  idAEliminar: number | null = null;
  mensaje: string = '';
  tipoMensaje: 'success' | 'error' | '' = '';
  mostrarMensaje: boolean = false;

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
      this.mostrarToast('Por favor completa los campos obligatorios correctamente.', 'error');
      return;
    }
    if (!this.nuevo.categoria_id) {
      this.mostrarToast('Selecciona una categoría', 'error');
      return;
    }
    this.productoService.crearProducto(this.nuevo).subscribe({
      next: () => {
        this.nuevo = this.resetNuevo();
        this.cargar();
        this.mostrarToast('Producto guardado correctamente.', 'success');
      },
      error: () => this.mostrarToast('Error al guardar el producto.', 'error')
    });
  }

  confirmarEliminar(id: number): void {
    this.idAEliminar = id;
    this.mostrarModalEliminar = true;
  }

  eliminarConfirmado(): void {
    if (this.idAEliminar == null) return;
    this.productoService.eliminarProducto(this.idAEliminar).subscribe({
      next: () => {
        this.cargar();
        this.mostrarToast('Producto eliminado correctamente.', 'success');
      },
      error: () => this.mostrarToast('Error al eliminar el producto.', 'error')
    });
    this.mostrarModalEliminar = false;
    this.idAEliminar = null;
  }

  cancelarEliminar(): void {
    this.mostrarModalEliminar = false;
    this.idAEliminar = null;
  }

  editar(p: Producto): void {
    this.editando = { ...p };
  }

  actualizar(): void {
    if (!this.editando) return;
    this.productoService.actualizarProducto(this.editando.id!, this.editando).subscribe({
      next: () => {
        this.editando = null;
        this.cargar();
        this.mostrarToast('Producto actualizado correctamente.', 'success');
      },
      error: () => this.mostrarToast('Error al actualizar el producto.', 'error')
    });
  }

  cancelar(): void {
    this.editando = null;
  }

  mostrarToast(mensaje: string, tipo: 'success' | 'error') {
    this.mensaje = mensaje;
    this.tipoMensaje = tipo;
    this.mostrarMensaje = true;
    setTimeout(() => this.mostrarMensaje = false, 2500);
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
