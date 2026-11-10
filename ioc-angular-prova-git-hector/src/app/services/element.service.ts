import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, of, timer, throwError } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';

import { Element, EstatElements, CriterisCerca, ElementApiResponse } from '../models/element.model';
import { adaptarElementApi, adaptarElementsApi } from '../adaptadors/element.adaptador';
import { environment } from '../../environments/environment';
import { ELEMENTS_MOCK } from '../mocks/dades-mock';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl || 'http://localhost:4301';

  private readonly _elements = signal<Element[]>(ELEMENTS_MOCK);
  private readonly _estat = signal<EstatElements>({ estat: 'inicial', elements: ELEMENTS_MOCK });

  readonly elements = this._elements.asReadonly();
  readonly estat = this._estat.asReadonly();

  private readonly criteris$ = new Subject<CriterisCerca>();
  private darrersCriteris: CriterisCerca = { terme: '', categoria: 'Totes' };

  constructor() {
    this.criteris$.pipe(
      tap((criteris) => {
        this.darrersCriteris = criteris;
        this._estat.set({ estat: 'carregant', elements: [] });
      }),
      switchMap((criteris) => 
        this.obtenirElementsApi(criteris).pipe(
          map((elements): EstatElements => ({ estat: 'exit', elements })),
          catchError((error: HttpErrorResponse) => {
            const elementsFiltratsLocal = this.filtrarLocal(ELEMENTS_MOCK, criteris);
            return of<EstatElements>({
              estat: 'error',
              elements: elementsFiltratsLocal,
              error: this.gestionarError(error)
            });
          })
        )
      )
    ).subscribe((estat) => {
      this._estat.set(estat);
      if (estat.elements.length > 0) {
        this._elements.set(estat.elements);
      }
    });
  }

  carregarTot(): void {
    this.cercar({ terme: '', categoria: 'Totes' });
  }

  cercar(criteris: CriterisCerca): void {
    this.criteris$.next({
      terme: criteris.terme.trim(),
      categoria: criteris.categoria
    });
  }

  reintentar(): void {
    this.cercar(this.darrersCriteris);
  }

  afegirElement(nou: Element): void {
    const llistaActual = this._elements();
    this._elements.set([nou, ...llistaActual]);
  }

  filtrarPerTextICategoria(text: string, categoria: string): Element[] {
    return this.filtrarLocal(this._elements(), { terme: text, categoria: categoria as any });
  }

  private obtenirElementsApi(criteris: CriterisCerca): Observable<Element[]> {
    let params = new HttpParams();
    if (criteris.categoria && criteris.categoria !== 'Totes') {
      params = params.set('categoria', criteris.categoria);
    }

    return this.http.get<ElementApiResponse[]>(`${this.apiUrl}/elements`, { params }).pipe(
      retry({
        count: 2,
        delay: (err, count) => timer(count * 1000)
      }),
      map(adaptarElementsApi),
      map(elements => this.filtrarLocal(elements, criteris))
    );
  }

  private filtrarLocal(elements: Element[], criteris: CriterisCerca): Element[] {
    const textClean = criteris.terme.toLowerCase();
    return elements.filter(e => {
      const coincideixCat = criteris.categoria === 'Totes' || !criteris.categoria || e.categoria === criteris.categoria;
      const coincideixText = !textClean || `${e.titol} ${e.descripcio}`.toLowerCase().includes(textClean);
      return coincideixCat && coincideixText;
    });
  }

  private gestionarError(error: HttpErrorResponse): string {
    if (error.status === 0) return 'No es pot connectar amb l\'API (porta 4301). S\'estan mostrant dades de fallback local.';
    if (error.status === 404) return 'Recurs no trobat a la URL del servidor.';
    return `Error al servidor (${error.status}): ${error.message}`;
  }
}