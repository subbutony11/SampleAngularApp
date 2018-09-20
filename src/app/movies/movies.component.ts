import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectedCharacterData } from '../selectedCharacterData';
import { Film } from '../types/film';
 
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  character: string;
  movies: Film[];

  constructor(private route: ActivatedRoute,
              private selectedCharacterData: SelectedCharacterData      
             ) { }

  ngOnInit() {
    this.character = this.selectedCharacterData.character.name;
    this.movies = this.route.snapshot.data.movieDetails.sort((a,b) =>{ return a.episode_id - b.episode_id});
  }
}
