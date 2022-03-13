import { Ability } from "./ability";
import { Move } from "./move";
import { Sprites } from "./sprites";
import { Type } from "./type";

export class Pokemon {
  constructor(
    public id: number,
    public name: string,
    public abilities: Ability[],
    public moves: Move[],
    public order: number,
    public weight: number,
    public height: number,
    public types: Type[],
    public sprites: Sprites
  ) {

  }
}
