import { Cliente } from './cliente';
import { Direccion } from './direccion';
import { EstadoPedido } from './estadoPedido';
import { PedidoDetalle } from './pedidoDetalle';
import { Pago } from './pago';

export interface Pedido {
  id?: number;
  cliente_id: number;
  direccion_id: number;
  estado_pedido_id: number;
  fecha: string;
  cliente?: Cliente;
  direccion?: Direccion;
  estado?: EstadoPedido;
  detalles?: PedidoDetalle[];
  pago?: Pago;
}
