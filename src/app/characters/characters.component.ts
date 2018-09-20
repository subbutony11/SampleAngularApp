import { Component } from '@angular/core';
import * as CHARACTERS from '../../assets/characters.json';
import { character } from '../types/character';
import { CharacterService } from './character.service';
import { Router } from '@angular/router'
import { SelectedCharacterData } from '../selectedCharacterData'
import { AlertService } from '../alert-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters: character[] = CHARACTERS.default.characters;
  selectedIndex: number;
  moviesPending: boolean;

  constructor(private characterService: CharacterService,
    private selectedCharacterData: SelectedCharacterData,
    private router: Router,
    private alertService: AlertService
  ) { }


  characterSelected(selectedCharacter: character, index: number): void {
    this.moviesPending = true;
    this.selectedIndex = index;

    this.characterService.getCharacterInfo(selectedCharacter)
      .subscribe(this.navigateToCharacter);
  }

  navigateToCharacter = (characterInfo: character): void => {
    if (!characterInfo) {
      this.HandleError();
      return;
    }

    this.selectedCharacterData.character = characterInfo;
    this.router.navigateByUrl('/movies')
      .catch(()=>{
        this.HandleError();
      });
  }

  HandleError(){
    this.alertService.addAlert(`Sorry, we couldn't retrieve the movies for ${this.characters[this.selectedIndex].name}. Please try another.`);
    this.moviesPending = false;
    this.selectedIndex = null;
  }
}
