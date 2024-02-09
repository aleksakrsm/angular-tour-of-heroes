import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { Hero } from '../hero';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  heroes:Hero[] = [];

  constructor(private heroService: HeroService){
  }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroesList=> this.heroes = heroesList.slice(1,5));
  }
}
