import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  //protected readonly title = signal('ioc-angular-prova-git-hector');
  public provaGit = 'Catàleg d\'Elements';   // substituïu-ho pel nom de la vostra aplicació
}
