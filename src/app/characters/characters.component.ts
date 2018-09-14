import { Component } from '@angular/core';
import * as CHARACTERS from '../../assets/characters.json';
import { character } from '../character';
import { CharacterService } from '../character.service';
import { Router } from '@angular/router'
import { SelectedCharacterData } from '../selectedCharacterData'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  characters: character[] = CHARACTERS.default.characters;
  selectedIndex: number;
  error: boolean;
  moviesPending: boolean;

  constructor(private characterService: CharacterService,
    private selectedCharacterData: SelectedCharacterData,
    private router: Router
  ) { }


  characterSelected(selectedCharacter: character, index: number): void {
    this.moviesPending = true;
    this.selectedIndex = index;
    this.error = false;

    this.characterService.getCharacterInfo(selectedCharacter)
      .subscribe(this.navigateToCharacter);
  }

  navigateToCharacter = (characterInfo: character): void => {
    if (!characterInfo) {
      this.error = true;
      this.moviesPending = false;
      this.selectedIndex = null;
      return;
    }

    this.selectedCharacterData.character = characterInfo;
    this.router.navigateByUrl('/movies');
  }
}
