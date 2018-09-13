import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { character } from './character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacterInfo(character: character){
    return this.http.get<character>(character.url);
  }
}
