import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ElementDetall {
  id: number;
  titol: string;
  descripcioLlarga: string;
  imatge: string;
  caracteristiques: string[];
  preu: number;
}

@Component({
  imports: [],
  standalone: true,
  selector: 'app-detall-element',
  styleUrl: './detall-element.component.scss',
  templateUrl: './detall-element.component.html',
})
export class DetallElementComponent {
  @Input({ required: true }) element!: ElementDetall;

  @Output() afegirCarret = new EventEmitter<ElementDetall>();
  @Output() comparar = new EventEmitter<ElementDetall>();

  onAfegirCarret(): void {
    this.afegirCarret.emit(this.element);
  }

  onComparar(): void {
    this.comparar.emit(this.element);
  }
}