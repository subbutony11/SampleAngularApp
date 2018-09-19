import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component'
import { Router, Routes, RouterModule } from '@angular/router';


describe('AppComponent', () => {
  let mockRouter: any;
  class MockRouter {
    navigate = jasmine.createSpy('navigate');
  }

  const routes: Routes = [
    {
      path: '',
      component: CharactersComponent,
    },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CharactersComponent,
      ],
      imports: [RouterModule.forRoot(routes)],
      providers: [{ provide: Router, useValue: mockRouter }],
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
