import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styles: [] // Se remueve styleUrl para evitar el error NG2008
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

  eliminarTicket(id: any): void {
    if (confirm('¿Estás seguro de eliminar este ticket?')) {
      // String(id) resuelve el error TS2345 convirtiendo el valor a string
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