import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Output() selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {

    //This is for getting heroes data from heroService asynchronously
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

}
