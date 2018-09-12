import { Component, OnInit } from '@angular/core';
import * as CHARACTERS from '../../assets/characters.json';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() { }

  characters = CHARACTERS.default.characters;

  ngOnInit() {
  }

}
