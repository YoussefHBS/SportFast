import { Producto } from './producto';

export interface PedidoDetalle {
  id?: number;
  pedido_id: number;
  producto_id: number;
  cantidad: number;
  precio_unitario: number;
  producto?: Producto;
}
