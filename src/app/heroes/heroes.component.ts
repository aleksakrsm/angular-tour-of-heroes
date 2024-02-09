import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-heroes',
  standalone: true,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent,
    RouterLink,
  ],
})
// export class HeroesComponent{
export class HeroesComponent implements OnInit {
  // hero: Hero = { id: 1, name: 'Windstorm' };
  // heroes = HEROES;
  // private heroService: HeroService = inject(HeroService);
  // selectedHero: Hero | undefined;

  heroes?: Hero[];
  // selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService
      .getHeroes()
      .subscribe((listOfHeroes) => (this.heroes = listOfHeroes));
  }
  // selectHero(hero: Hero): void {
  //   this.selectedHero = hero;
  //   // this.messageService.add(`hero ${hero.name} selected`);
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  // cancelSelection(): void {
  //   this.selectedHero = undefined;
  // }
}
