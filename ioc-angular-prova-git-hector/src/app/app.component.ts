import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  CurrencyPipe, 
  DatePipe, 
  PercentPipe, 
  TitleCasePipe, 
  UpperCasePipe 
} from '@angular/common';

// Imports de tus componentes generados
import { TargetaElementComponent } from './components/targeta-element/targeta-element.component';
import { DetallElementComponent, ElementDetall } from './components/detall-element/detall-element.component';
import { FormulariElementComponent, NouElement } from './components/formulari-element/formulari-element.component';
import { BarraFiltresComponent, FiltresElement } from './components/barra-filtres-element/barra-filtres-element.component';
import { LlistaElementsComponent } from './components/llista-element/llista-element.component';

// Imports de modelos y mocks
import { ELEMENTS_MOCK } from './mocks/dades-mock';
import { Element, ElementCataleg, EstatLlista } from './models/element.model';

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
    FormulariElementComponent,
    BarraFiltresComponent,
    LlistaElementsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App implements OnInit {

  // =========================================================================
  // SECCIÓN 1: DETALLE DE PRODUCTO (@Input / @Output)
  // =========================================================================
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
    console.log('Afegit al carret:', element.titol);
  }

  onComparar(element: ElementDetall): void {
    console.log('Comparant element:', element.titol);
  }

  // =========================================================================
  // SECCIÓN 2: CONTROL DE FLUJO CON SIGNALS & PIPES
  // =========================================================================
  estatLlista = signal<EstatLlista>('carregant');
  elementsSignals = signal<ElementCataleg[]>([]);
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
          descripcio: 'Pack d\'icones en format SVG',
          categoria: 'icones',
          preu: 29.99,
          dataActualitzacio: '2025-01-10T09:30:00Z',
          percentatgeDisponibilitat: 0.95,
          disponible: true
        },
        {
          id: 2,
          titol: 'catàleg de colors corporatius',
          descripcio: 'Paleta de colors per a disseny web',
          categoria: 'paletes',
          preu: 49.99,
          dataActualitzacio: '2025-01-15T10:00:00Z',
          percentatgeDisponibilitat: 0.85,
          disponible: true
        }
      ];

      this.elementsSignals.set(dadesSimulades);
      this.estatLlista.set(dadesSimulades.length > 0 ? 'disponible' : 'buit');
    }, 1200);
  }

  simularEstat(estat: EstatLlista): void {
    this.estatLlista.set(estat);
    if (estat === 'error') {
      this.missatgeError.set('Error de connexió amb el servidor.');
    }
  }

  // =========================================================================
  // SECCIÓN 3: FORMULARIO REACTIVO (RECEPTOR)
  // =========================================================================
  onElementCreat(nouElement: NouElement): void {
    console.log('Element rebut del formulari:', nouElement);
  }

  // =========================================================================
  // SECCIÓN 4: PRÁCTICA FINAL - FILTROS Y LISTA RESPONSIVE
  // =========================================================================
  elements: Element[] = [];
  elementsFiltrats: Element[] = [];
  elementSeleccionat: Element | undefined = undefined;
  filtresActuals: FiltresElement = { text: '', categoria: 'Totes' };
  carregant = signal(true);

  constructor() {
    setTimeout(() => {
      this.elements = ELEMENTS_MOCK;
      this.elementsFiltrats = ELEMENTS_MOCK;
      this.carregant.set(false);
    }, 800);
  }

  actualitzaFiltres(filtres: FiltresElement): void {
    this.filtresActuals = filtres;
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.elementsFiltrats = this.elements.filter((element) => {
      const categoriaCoincideix = filtres.categoria === 'Totes' || element.categoria === filtres.categoria;
      const textCoincideix = text === '' || this.conteText(element, text);
      return categoriaCoincideix && textCoincideix;
    });

    if (this.elementSeleccionat && !this.elementsFiltrats.includes(this.elementSeleccionat)) {
      this.elementSeleccionat = undefined;
    }
  }

  seleccionaElement(element: Element): void {
    this.elementSeleccionat = element;
  }

  tancaDetall(): void {
    this.elementSeleccionat = undefined;
  }

  private conteText(element: Element, text: string): boolean {
    const contingut = `${element.titol} ${element.descripcio}`.toLocaleLowerCase('ca');
    return contingut.includes(text);
  }
}