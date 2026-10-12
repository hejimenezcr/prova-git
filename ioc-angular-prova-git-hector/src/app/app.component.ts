import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  CurrencyPipe, 
  DatePipe, 
  PercentPipe, 
  TitleCasePipe, 
  UpperCasePipe 
} from '@angular/common';

import { TargetaElementComponent } from './components/targeta-element/targeta-element.component';
import { DetallElementComponent, ElementDetall } from './components/detall-element/detall-element.component';
import { ElementCataleg, EstatLlista } from './models/element.model';
import { FormulariElementComponent, NouElement } from './components/formulari-element/formulari-element.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TargetaElementComponent,
    DetallElementComponent,
    TitleCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    PercentPipe,
    FormulariElementComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {
  // --- 1. DADES I MÈTODES PER AL COMPONENT DE DETALL ---
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

  onAfegirCarret(element: ElementDetall): void {
    console.log('Afegit al carret des de la pàgina principal:', element.titol);
  }

  onComparar(element: ElementDetall): void {
    console.log('Comparant element:', element.titol);
  }

  // --- 2. DADES I MÈTODES PER A LA LLISTA DE CONTROL DE FLUX (SIGNALS & PIPES) ---
  estatLlista = signal<EstatLlista>('carregant');
  elements = signal<ElementCataleg[]>([]);
  missatgeError = signal<string>('');

  ngOnInit(): void {
    this.carregarElements();
  }

  carregarElements(): void {
    this.estatLlista.set('carregant');

    setTimeout(() => {
      const dadesSimulades: ElementCataleg[] = [
        {
          id: 1,
          titol: 'pack d\'icones vectorials',
          categoria: 'icones',
          preu: 29.99,
          dataActualitzacio: '2025-01-10T09:30:00Z',
          percentatgeDisponibilitat: 0.95,
          disponible: true
        },
        {
          id: 2,
          titol: 'catàleg de colors corporatius',
          categoria: 'paletes',
          preu: 49.99,
          dataActualitzacio: '2025-01-15T10:00:00Z',
          percentatgeDisponibilitat: 0.85,
          disponible: true
        },
        {
          id: 3,
          titol: 'sistema tipogràfic avançat',
          categoria: 'tipografia',
          preu: 0,
          dataActualitzacio: '2025-01-18T16:45:00Z',
          percentatgeDisponibilitat: 0,
          disponible: false
        }
      ];

      this.elements.set(dadesSimulades);
      this.estatLlista.set(dadesSimulades.length > 0 ? 'disponible' : 'buit');
    }, 1200);
  }

  simularEstat(estat: EstatLlista): void {
    this.estatLlista.set(estat);
    if (estat === 'error') {
      this.missatgeError.set('Error de connexió amb el servidor.');
    }
  }

  // --- 3. PARA GESTIONAR EL FORMULARIO ---
  onElementCreat(nouElement: NouElement): void {
    console.log('Element rebut del formulari:', nouElement);
    // Aquí pots afegir el nou element a la teva llista d'elements
  }
}


///////////////////////





