import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function multipliDe(multipli: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = Number(control.value);
    if (Number.isNaN(valor) || valor === 0) {
      return null;
    }
    if (valor % multipli !== 0) {
      return {
        noMultipli: {
          multipli,
          valorRebut: valor,
          multiplesPropers: [
            Math.floor(valor / multipli) * multipli,
            Math.ceil(valor / multipli) * multipli
          ]
        }
      };
    }
    return null;
  };
}

export function senseParaula(paraula: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const text = String(control.value || '').toLowerCase();
    if (text.includes(paraula.toLowerCase())) {
      return {
        paraulaProhibida: { paraula, textRebut: control.value }
      };
    }
    return null;
  };
}