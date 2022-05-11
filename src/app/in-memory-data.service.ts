import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS } from './pokemon/mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    // reasign constant value when the constant is locate at the exterior file
    const pokemons = POKEMONS
    return { pokemons }; 
  }
  constructor() { }
}
