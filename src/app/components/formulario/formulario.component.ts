import { Component, EventEmitter, Output } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html'
})
export class FormularioComponent {
  @Output() ticketCreado = new EventEmitter<Ticket>();

  nuevoTicket: Ticket = {
    titulo: '',
    descripcion: '',
    estado: 'Abierto',
    prioridad: 'Media'
  };

  guardarTicket() {
    if (!this.nuevoTicket.titulo || !this.nuevoTicket.descripcion) {
      alert('Por favor complete todos los campos requeridos');
      return;
    }
    this.ticketCreado.emit({ ...this.nuevoTicket });
    this.nuevoTicket = { titulo: '', descripcion: '', estado: 'Abierto', prioridad: 'Media' };
  }
}