import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. Importar FormsModule
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // 2. Agregar FormsModule aquí
  ],
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent {
  nuevoTicket = {
    titulo: '',
    descripcion: ''
  };

  constructor(private ticketService: TicketService) {}

  // Agrega o mantén tu función para enviar el formulario
  guardarTicket(): void {
    this.ticketService.createTicket(this.nuevoTicket).subscribe({
      next: (res) => {
        console.log('Ticket creado con éxito', res);
        this.nuevoTicket = { titulo: '', descripcion: '' };
      },
      error: (err) => {
        console.error('Error al crear ticket', err);
      }
    });
  }
}