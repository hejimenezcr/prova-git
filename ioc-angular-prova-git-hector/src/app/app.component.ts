import { Component, signal, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { 
  CurrencyPipe, 
  DatePipe, 
  //PercentPipe, 
  TitleCasePipe, 
  UpperCasePipe 
} from '@angular/common';

//import { TargetaElementComponent } from './components/targeta-element/targeta-element.component';
import { DetallElementComponent, ElementDetall } from './components/detall-element/detall-element.component';
import { FormulariElementComponent } from './components/formulari-element/formulari-element.component';
import { BarraFiltresComponent, FiltresElement } from './components/barra-filtres-element/barra-filtres-element.component';
import { LlistaElementsComponent } from './components/llista-element/llista-element.component';

import { Element, EstatLlista } from './models/element.model';
import { ElementService } from './services/element.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    //TargetaElementComponent,
    DetallElementComponent,
    TitleCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    //PercentPipe,
    FormulariElementComponent,
    BarraFiltresComponent,
    LlistaElementsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly elementService = inject(ElementService);

  // SECCIÓ 1: DETALL
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

  // SECCIÓ 2: CONTROL DE FLUX AMB SIGNALS
  estatLlista = signal<EstatLlista>('carregant');
  elementsSignals = this.elementService.elements;
  missatgeError = signal<string>('');

  ngOnInit(): void {
    this.carregarElements();
  }

  carregarElements(): void {
    this.estatLlista.set('carregant');
    this.elementService.carregarTot();
    setTimeout(() => {
      this.estatLlista.set(this.elementsSignals().length > 0 ? 'disponible' : 'buit');
    }, 600);
  }

  simularEstat(estat: EstatLlista): void {
    this.estatLlista.set(estat);
    if (estat === 'error') {
      this.missatgeError.set('Error de connexió simulat.');
    }
  }

  // SECCIÓ 3: FORMULARI REACTIU
  onElementCreat(nouElement: any): void {
    console.log('Element creat des del formulari:', nouElement);
    const elementFormat: Element = {
      id: Date.now(),
      titol: nouElement.titol || nouElement.nom,
      descripcio: nouElement.descripcio || 'Sense descripció',
      categoria: nouElement.categoria || 'Electrònica',
      dataActualitzacio: new Date().toISOString().split('T')[0],
      preu: nouElement.preu || nouElement.pressupost || 0
    };
    this.elementService.afegirElement(elementFormat);
    this.actualitzaFiltres(this.filtresActuals);
  }

  // SECCIÓ 4: INTEGRACIÓ AMB FILTRES I ACCESSILIBITAT
  elementsFiltrats: Element[] = [];
  elementSeleccionat: Element | undefined = undefined;
  filtresActuals: FiltresElement = { text: '', categoria: 'Totes' };
  carregant = signal(false);

  actualitzaFiltres(filtres: FiltresElement): void {
    this.filtresActuals = filtres;
    this.elementService.cercar({ terme: filtres.text, categoria: filtres.categoria });
    this.elementsFiltrats = this.elementService.filtrarPerTextICategoria(filtres.text, filtres.categoria);
  }

  seleccionaElement(element: Element): void {
    this.elementSeleccionat = element;
  }

  tancaDetall(): void {
    this.elementSeleccionat = undefined;
  }
}