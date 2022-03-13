import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../classes/pokemon';
import { Type } from '../classes/type';
import { PokedexService } from '../services/pokedex.service';
export interface Tile {
  
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;
  tiles: Tile[] = [
    { text: 'pokemon', cols: 1, rows: 1 },
    { text: 'space', cols: 1, rows: 1},
    { text: 'types', cols: 2, rows: 1},
    { text: 'basicInfo', cols: 1, rows: 1 },
    { text: 'space', cols: 1, rows: 1},
    { text: 'tabs', cols: 2, rows: 2 },
  ];
  constructor(private servicio: PokedexService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio.GetPokemon(id).subscribe(x => this.pokemon = x);
  }
  GetIconClass(type: Type): string {
    var stringClass = 'icon ' + type.type.name;
    return stringClass;
  }
  GetIcon(type: Type) {
    return 'assets/' + type.type.name + '.svg'
  }
}
