export interface Ticket {
  _id?: string;
  titulo: string;
  descripcion: string;
  estado: 'Abierto' | 'En Proceso' | 'Resuelto';
  prioridad: 'Baja' | 'Media' | 'Alta';
  fechaCreacion?: Date;
}