import { AbstractControl, ValidationErrors, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

export function codiElementValid(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = String(control.value || '').trim();
    if (!valor) return null;

    const pattern = /^CAT-\d{4}-\d{3}$/;
    if (!pattern.test(valor)) {
      return {
        codiInternInvalid: {
          formatEsperat: 'CAT-YYYY-NNN',
          exemple: 'CAT-2024-001'
        }
      };
    }
    return null;
  };
}

export function codiElementDisponible(http: HttpClient, apiUrl: string): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const valor = String(control.value || '').trim();

    if (!valor || !/^CAT-\d{4}-\d{3}$/.test(valor)) {
      return of(null);
    }

    return timer(500).pipe(
      switchMap(() =>
        http.get<string[]>(`${apiUrl}/codisExistents`).pipe(
          map((codis) => {
            const existeix = codis.includes(valor);
            return existeix ? { codiDuplicat: { valor, missatge: 'Aquest codi ja existeix a la base de dades' } } : null;
          }),
          catchError((err) => {
            console.error('[codiElementDisponible] Error API:', err);
            return of(null);
          })
        )
      )
    );
  };
}