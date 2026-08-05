import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Importamos los componentes
import { Dashboardcomponent} from './components/dashboard/dashboard.component';
import { FormularioComponent } from './components/formulario/formulario';
import { ListaComponent } from './components/lista/lista';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DashboardComponent,
    FormularioComponent,
    ListaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'help-desk-frontend';
  tickets: any[] = [];
}