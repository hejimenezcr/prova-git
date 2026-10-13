import { Component, Input } from '@angular/core';
import { CategoriaElement } from '../../models/element.model';

@Component({
  selector: 'app-etiqueta-element',
  standalone: true,
  imports: [],
  templateUrl: './etiqueta-element.component.html',
  styleUrl: './etiqueta-element.component.scss'
})
export class EtiquetaElementComponent {
  @Input({ required: true }) categoria!: CategoriaElement;
  @Input() destacat = false;
}