import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  // Se cambia styleUrl por styles [] para no depender de un archivo .css que no existe
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

  // Se asegura que id se convierta a string con String(id) para que coincida con el servicio
  eliminarTicket(id: any): void {
    if (confirm('¿Estás seguro de eliminar este ticket?')) {
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