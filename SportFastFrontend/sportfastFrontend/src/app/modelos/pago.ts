import { Pedido } from './pedido';
import { MetodoPago } from './metodoPago';

export interface Pago {
  id?: number;
  pedido_id: number;
  metodo_pago_id: number;
  monto: number;
  fecha_pago: string;
  pedido?: Pedido;
  metodo_pago?: MetodoPago;
}
