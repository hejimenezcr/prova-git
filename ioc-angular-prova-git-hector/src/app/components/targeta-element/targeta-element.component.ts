import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-targeta-element',
  styleUrl: './targeta-element.component.scss',
  templateUrl: './targeta-element.component.html',
})
export class TargetaElementComponent {
  titol = 'Element destacat del catàleg // Element modificat en temps real';
  descripcio = 'Aquesta és una targeta bàsica que mostra informació d\'un element. Serà reutilitzable per tots els elements del catàleg.';
}