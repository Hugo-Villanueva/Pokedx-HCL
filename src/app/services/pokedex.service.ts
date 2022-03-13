import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Move } from '../classes/move';
import { Name } from '../classes/name';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../classes/pokemon';
export interface resultado {
  results: Name[];
}
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(protected httpClient: HttpClient) { }


  GetPokemons(): Observable<resultado>{
    return this.httpClient.get<resultado>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
  }
  GetPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/'+id+'/');
  }
  GetPokemonByUrl(url: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(url);
  }
}
