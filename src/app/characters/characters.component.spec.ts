import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should parse 4 characters from json file',()=>{
    expect(component.characters.length).toBe(4);
  });

  it('should parse Luke Skywalker as first element',()=>{
    expect(component.characters[0].name).toBe("Luke Skywalker");
    expect(component.characters[0].url).toBe("https://swapi.co/api/people/1/");
  });
});
