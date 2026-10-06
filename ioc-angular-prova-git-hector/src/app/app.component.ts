import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TargetaElementComponent } from './components/targeta-element/targeta-element.component'; // linia añadir

@Component({
  imports: [RouterOutlet, TargetaElementComponent],  // Afegiu aquí segundo parametro
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  // dejema sin parametro que hay de base
  //protected readonly title = signal('ioc-angular-prova-git-hector');
}