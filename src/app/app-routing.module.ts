import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { CharactersComponent } from './characters/characters.component';
import { MovieDetailsResolver } from './movieDetailsResolver';


const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full'},
  { path: 'characters', component: CharactersComponent },
  { path: 'movies', component: MoviesComponent, resolve: {movieDetails: MovieDetailsResolver} }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}