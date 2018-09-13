import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedCharacterData } from '../selectedCharacterData';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  character: string;

  constructor(private route: ActivatedRoute,
              private selectedCharacterData: SelectedCharacterData      
             ) { }

  ngOnInit() {
    this.character = this.selectedCharacterData.character.name;
  }
}
