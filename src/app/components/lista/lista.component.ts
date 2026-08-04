import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  @Input() tickets: Ticket[] = [];
  @Output() ticketEliminado = new EventEmitter<string>();
  @Output() ticketActualizado = new EventEmitter<Ticket>();

  eliminar(id?: string) {
    if (id && confirm('¿Desea eliminar este ticket?')) {
      this.ticketEliminado.emit(id);
    }
  }

  cambiarEstado(ticket: Ticket, nuevoEstado: any) {
    const actualizado: Ticket = { ...ticket, estado: nuevoEstado };
    this.ticketActualizado.emit(actualizado);
  }
}