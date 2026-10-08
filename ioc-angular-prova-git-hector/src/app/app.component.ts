//donde se genera las funciones y rutas principales del aplicativo
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TargetaElementComponent } from './components/targeta-element/targeta-element.component';
import { DetallElementComponent, ElementDetall } from './components/detall-element/detall-element.component';
//import { TargetaElementCompletComponent } from './components/targeta-element-complet/targeta-element-complet.component';


@Component({
  imports: [RouterOutlet, TargetaElementComponent, DetallElementComponent],  // TargetaElementCompletComponent Afegiu aquí donde se agregan las clases creadas para sub funciones o subpagianas
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  // Definim un objecte de prova amb les dades que demana DetallElementComponent
  elementDetallExemple: ElementDetall = {
    id: 1,
    titol: 'Microscopi Electrònic d\'Alta Resolució',
    descripcioLlarga: 'Equip avançat per a la investigació científica i anàlisi de materials a escala nanomètrica.',
    imatge: 'https://placehold.co/600x400',
    caracteristiques: [
      'Resolució d\'1 nm',
      'Càmera digital integrada de 20 MP',
      'Programari d\'anàlisi d\'imatges inclòs',
      'Garantia de 3 anys'
    ],
    preu: 45000
  };

  // Mètodes per gestionar els esdeveniments dels botons (@Output)
  onAfegirCarret(element: ElementDetall): void {
    console.log('Afegit al carret des de la pàgina principal:', element.titol);
  }

  onComparar(element: ElementDetall): void {
    console.log('Comparant element:', element.titol);
  }
}