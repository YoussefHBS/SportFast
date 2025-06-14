import { Categoria } from './categoria';
import { Color } from './color';
import { Talla } from './talla';

export interface Producto {
  id?: number;
  nombre: string;
  descripcion?: string;
  imagen?: string;
  precio: number;
  cantidad: number;
  categoria_id: number | null; // <- permite null
  categoria?: Categoria;
  colores?: Color[];
  tallas?: Talla[];
}
