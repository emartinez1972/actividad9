import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
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

  eliminarTicket(id: number): void {
    if (confirm('¿Estás seguro de eliminar este ticket?')) {
      this.ticketService.deleteTicket(id).subscribe({
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