import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SelectedCharacterData } from '../selectedCharacterData';

import { MoviesComponent } from './movies.component';
import { Film } from '../types/film';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  let movies: Film[] = [
                        {
                          url: 'http://movies/3',
                          title: 'Movie 3',
                          episode_id: 3,
                          release_date: new Date('1980-05-17'),
                          opening_crawl: 'move 3 crawl', 
                        },
                        {
                          url: 'http://movies/1',
                          title: 'Movie 1',
                          episode_id: 1,
                          release_date: new Date('1980-05-17'),
                          opening_crawl: 'move 1 crawl', 
                        },
                        {
                          url: 'http://movies/2',
                          title: 'Movie 2',
                          episode_id: 2,
                          release_date: new Date('1990-05-17'),
                          opening_crawl: 'move 2 crawl', 
                          }
                      ];

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {data:{movieDetails: movies}}
          },
        },
        {
          provide: SelectedCharacterData,
          useValue:{
            character:{
              name: "Luke Skywalker"
            }}
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have character name', ()=>{
    expect(component.character).toBe("Luke Skywalker");
  });

  it('should have sorted list of movies', ()=>{
    expect(component.movies.length).toBe(3);
    expect(component.movies[0].episode_id).toBe(1);
    expect(component.movies[1].episode_id).toBe(2);
    expect(component.movies[2].episode_id).toBe(3);
  })
});
