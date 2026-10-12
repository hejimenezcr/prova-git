import { Component, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface NouElement {
  titol: string;
  categoria: string;
  preu: number;
  emailContacte: string;
  descripcio: string;
  acceptaTermes: boolean;
}

@Component({
  selector: 'app-formulari-element',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulari-element.component.html',
  styleUrl: './formulari-element.component.scss'
})

export class FormulariElementComponent {
  @Output() elementCreat = new EventEmitter<NouElement>();

  formulari: FormGroup;
  enviat = false;

  constructor(private fb: FormBuilder) {
    this.formulari = this.fb.group({
      titol: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', [Validators.required]],
      preu: [null, [Validators.required, Validators.min(0)]],
      emailContacte: ['', [Validators.required, Validators.email]],
      descripcio: ['', [Validators.maxLength(200)]],
      acceptaTermes: [false, [Validators.requiredTrue]]
    });
  }

  // Comprova si un camp és invàlid i ha estat tocat per l'usuari
  esCampInvalid(nomCamp: string): boolean {
    const camp = this.formulari.get(nomCamp);
    return !!(camp && camp.invalid && (camp.touched || this.enviat));
  }

  onSubmit(): void {
    this.enviat = true;

    if (this.formulari.valid) {
      console.log('Formulari vàlid! Dades:', this.formulari.value);
      this.elementCreat.emit(this.formulari.value);
      
      // Reiniciar formulari després d'enviar
      this.formulari.reset();
      this.enviat = false;
    } else {
      // Marcar tots els camps com a mecats/tocats per mostrar missatges d'error
      this.formulari.markAllAsTouched();
    }
  }
}


