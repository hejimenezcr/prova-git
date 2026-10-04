// targeta-element.component.ts
// este codigo es del profe
//export class TargetaElementComponent {
  //@Input() element!: Element;
//}
// este codigo es de la IA
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.css'
})
export class TargetaElementComponent {
  @Input() element!: any; // o el tipo de interfaz/modelo que uses
}
