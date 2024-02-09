import { RouterLink, RouterOutlet } from '@angular/router';

import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageComponent } from "./message/message.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeroesComponent, MessageComponent,RouterLink]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
