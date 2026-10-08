import { Component } from '@angular/core';

@Component({
  selector: 'app-targeta-element-complet',
  templateUrl: './targeta-element-complet.component.html',
  styleUrl: './targeta-element-complet.component.scss'
})
export class TargetaElementCompletComponent {
  titol = 'Microscopi Electrònic';
  descripcio = 'Microscopi d\'alta resolució per a investigació científica avançada. Capacitat d\'ampliació fins a 100.000x.';
  categoria = 'Equip de laboratori';
  preu = 45000;
  imatge = 'https://placehold.co/300x200';

  veureDetalls(): void {
    console.log(`Veient detalls de: ${this.titol}`);
  }
}