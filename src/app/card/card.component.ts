import { Component, Input, OnInit } from '@angular/core';
import { Name } from '../classes/name';
import { Pokemon } from '../classes/pokemon';
import { Type } from '../classes/type';
import { PokedexService } from '../services/pokedex.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: Name;
  pokemon: Pokemon;
  constructor(private servicio: PokedexService) { }

  ngOnInit() {
    if (this.data) {
      this.servicio.GetPokemonByUrl(this.data.url).subscribe(x => this.pokemon = x);
    }
   
  }
  GetIconClass(type: Type): string {
    var stringClass = 'icon ' + type.type.name;
    return stringClass;
  }
  GetIcon(type: Type) {
    return 'assets/' + type.type.name+ '.svg'
  }

}
