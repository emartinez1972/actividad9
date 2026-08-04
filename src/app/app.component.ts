import { Component, OnInit } from '@angular/core';
import { TicketService } from './services/ticket.service';
import { Ticket } from './models/ticket';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.cargarTickets();
  }

  cargarTickets() {
    this.ticketService.getTickets().subscribe({
      next: (data) => this.tickets = data,
      error: (err) => console.error('Error al cargar tickets:', err)
    });
  }

  onTicketCreado(ticket: Ticket) {
    this.ticketService.createTicket(ticket).subscribe({
      next: () => this.cargarTickets(),
      error: (err) => console.error('Error al crear ticket:', err)
    });
  }

  onTicketEliminado(id: string) {
    this.ticketService.deleteTicket(id).subscribe({
      next: () => this.cargarTickets(),
      error: (err) => console.error('Error al eliminar ticket:', err)
    });
  }

  onTicketActualizado(ticket: Ticket) {
    if (ticket._id) {
      this.ticketService.updateTicket(ticket._id, ticket).subscribe({
        next: () => this.cargarTickets(),
        error: (err) => console.error('Error al actualizar ticket:', err)
      });
    }
  }
}