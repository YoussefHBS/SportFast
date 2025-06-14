import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemCarrito } from '../modelos/itemcarrito';
import { PagoService } from './pagos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: ItemCarrito[] = [];
  private carritoSubject = new BehaviorSubject<ItemCarrito[]>([]);
  carrito$ = this.carritoSubject.asObservable();
  constructor(private pagoService: PagoService) {} // 👈 AÑADE ESTO


  agregarProducto(item: ItemCarrito) {
    // Evitar duplicados por producto_id + color + talla
    const index = this.carrito.findIndex(p =>
      p.producto_id === item.producto_id &&
      p.color === item.color &&
      p.talla === item.talla
    );

    if (index !== -1) {
      this.carrito[index].cantidad += item.cantidad;
      this.carrito[index].total = this.carrito[index].precio_unitario * this.carrito[index].cantidad;
    } else {
      this.carrito.push(item);
    }

    this.carritoSubject.next(this.carrito);
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    this.carritoSubject.next(this.carrito);
  }

  vaciarCarrito() {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }

  getTotal(): number {
    return this.carrito.reduce((acc, item) => acc + item.total, 0);
  }

   getItems(): ItemCarrito[] {
    return this.carrito;
  }
  pagarConStripe() {
  const productos = this.getItems();

  this.pagoService.crearSesionPago(productos).subscribe({
    next: (res: any) => {
      if (res.url) {
        window.location.href = res.url; // 🔁 Redirige a Stripe
      } else {
        alert('No se pudo obtener la URL de Stripe.');
      }
    },
    error: (err) => {
      console.error('Error al crear sesión de pago:', err);
      alert('Ocurrió un error al procesar el pago.');
    }
  });
}


}
