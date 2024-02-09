import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../service/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent implements OnInit {
  // @Input() selectedHero?: Hero;
  selectedHero?: Hero;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) {}
    ngOnInit(): void {
      console.log("ng on init");
      console.log(Number(this.route.snapshot.paramMap.get('id')));
      this.heroService
      .getHero(Number(this.route.snapshot.paramMap.get('id')))
      .subscribe((hero) => (this.selectedHero = hero));
    }
    goBack() {
      this.location.back();
    }
}
