import { Injectable } from '@angular/core';
import { character } from './character'

@Injectable({
    providedIn: 'root'
  })
export class SelectedCharacterData{
    character: character

    public constructor() { }
}