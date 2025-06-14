import { Cliente } from './cliente';

export interface Direccion {
  id?: number;
  cliente_id: number;
  direccion: string;
  ciudad: string;
  codigo_postal: string;
  pais: string;
  cliente?: Cliente;
}
