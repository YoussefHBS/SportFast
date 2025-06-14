export interface Cliente {
  id?: number;
  nombre: string;
  apellido1: string;
  apellido2?: string;
  direccion?: string;
  correo: string;
  telefono?: string;
  admin?: number;
  password: string;
}
