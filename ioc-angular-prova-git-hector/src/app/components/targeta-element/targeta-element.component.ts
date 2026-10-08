//funcionalidad en concreto
import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-targeta-element',
  styleUrl: './targeta-element.component.scss',
  templateUrl: './targeta-element.component.html',
})
export class TargetaElementComponent {
  titol = 'Element destacat del catàleg // a tiempo // real';
  descripcio = 'Aquesta és una targeta bàsica que mostra informació d\'un element. Serà reutilitzable per tots els elements del catàleg.';
  element = {
    nom: 'Microscopi Electrònic',
    descripcio: 'Microscopi d\'alta resolució per a investigació científica.',
    imatge: 'https://placehold.co/300x200',
    preu: 45000,
    disponible: true,
    enllac: '/element/microscopi-electronic'
  };

  processant = false;

  //get preuAmbIVA(): number {
    //return this.element.preu * 1.21;
  //}
}