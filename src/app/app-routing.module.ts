import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: 'Pokemon/:id',
    component: PokemonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
