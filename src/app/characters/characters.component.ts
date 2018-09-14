import { Component, OnInit } from '@angular/core';
import * as CHARACTERS from '../../assets/characters.json';
import {character} from '../character';
import {CharacterService} from '../character.service';
import { Router } from '@angular/router'
import { SelectedCharacterData } from '../selectedCharacterData'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterService: CharacterService,
              private selectedCharacterData: SelectedCharacterData,
              private router: Router
              ) { }

  characters: character[] = CHARACTERS.default.characters;
  error: boolean;

  ngOnInit() {
  }

  characterSelected(selectedCharacter: character): void{
    this.error = false;
    this.characterService.getCharacterInfo(selectedCharacter)
      .subscribe(this.navigateToCharacter);
  }

  navigateToCharacter = (characterInfo: character):void =>{
    if (!characterInfo){
      this.error = true;
    }
    
    this.selectedCharacterData.character = characterInfo;
    this.router.navigateByUrl('/movies');
  }

}
