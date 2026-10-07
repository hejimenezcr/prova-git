import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TargetaElementComponent } from './components/targeta-element/targeta-element.component';

@Component({
  imports: [RouterOutlet, TargetaElementComponent],  // Afegiu aquí
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {}