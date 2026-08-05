import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  tickets: any[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.obtenerTickets();
  }

  obtenerTickets(): void {
    this.ticketService.getTickets().subscribe({
      next: (data) => {
        this.tickets = data;
      },
      error: (err) => {
        console.error('Error al obtener los tickets:', err);
      }
    });
  }

  // Solución al error TS2345:
  eliminarTicket(id: number | string): void {
    if (confirm('¿Estás seguro de eliminar este ticket?')) {
      // Convertimos id a String para que coincida con el tipo del servicio
      this.ticketService.deleteTicket(String(id)).subscribe({
        next: () => {
          this.obtenerTickets();
        },
        error: (err) => {
          console.error('Error al eliminar el ticket:', err);
        }
      });
    }
  }
}