import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Output() selectedHero?: Hero;

  heroes = HEROES;


  ngOnInit(): void {
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
