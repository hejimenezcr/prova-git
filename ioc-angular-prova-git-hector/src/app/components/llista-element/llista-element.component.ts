import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [TargetaElementComponent],
  templateUrl: './llista-element.component.html', // <-- CORREGIT (llista-element en singular)
  styleUrl: './llista-element.component.scss'     // <-- CORREGIT (llista-element en singular)
})
export class LlistaElementsComponent {
  @Input({ required: true }) elements: Element[] = [];
  @Input() elementSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Element>();

  propagaSeleccio(element: Element): void {
    this.selecciona.emit(element);
  }
}