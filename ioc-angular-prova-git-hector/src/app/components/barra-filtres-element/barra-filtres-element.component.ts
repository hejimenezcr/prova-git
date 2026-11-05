import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaElement } from '../../models/element.model';

export interface FiltresElement {
  text: string;
  categoria: CategoriaElement | 'Totes';
}

@Component({
  selector: 'app-barra-filtres',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-filtres-element.component.html', // <-- CORREGIT (afegit -element)
  styleUrl: './barra-filtres-element.component.scss'     // <-- CORREGIT (afegit -element)
})
export class BarraFiltresComponent {
  @Output() filtresCanviats = new EventEmitter<FiltresElement>();

  categories: Array<CategoriaElement | 'Totes'> = ['Totes', 'Electrònica', 'Àudio', 'Accessoris', 'Pantalles', 'Energia'];

  filtres: FiltresElement = {
    text: '',
    categoria: 'Totes',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({ ...this.filtres });
  }

  restableixFiltres(): void {
    this.filtres = { text: '', categoria: 'Totes' };
    this.aplicaFiltres();
  }
}