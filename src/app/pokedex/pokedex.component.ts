import { Component, OnInit } from '@angular/core';
import { Name } from '../classes/name';
import { Pokemon } from '../classes/pokemon';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokemons: Name[];
  constructor(private service: PokedexService) {
    this.pokemons = [];
  }

  ngOnInit() {
    this.service.GetPokemons().subscribe(x => {
      this.pokemons = x.results;
    });
  }

}
