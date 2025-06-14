export interface ItemCarrito {
  pedido_id: number;
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
  total: number;
  color?: string;
  talla?: string;
  nombre?: string;
  descripcion?: string;
  imagen?: string;
}
