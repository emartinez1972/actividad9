import { Component, Input } from '@angular/core';
import { Ticket } from '../../models/ticket';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  @Input() tickets: Ticket[] = [];

  get total(): number { return this.tickets.length; }
  get abiertos(): number { return this.tickets.filter(t => t.estado === 'Abierto').length; }
  get enProceso(): number { return this.tickets.filter(t => t.estado === 'En Proceso').length; }
  get resueltos(): number { return this.tickets.filter(t => t.estado === 'Resuelto').length; }
}