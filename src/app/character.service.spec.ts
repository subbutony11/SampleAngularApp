import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { HttpClientModule } from '@angular/common/http';




describe('CharacterService', () => {
  let httpClientSpy: jasmine.Spy;
  let errorHandlerServiceSpy: jasmine.Spy;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    errorHandlerServiceSpy = jasmine.createSpyObj('ErrorHandlerService', ['handleError']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [{
        provide: 'HttpClient',
        useValue: httpClientSpy
      },
      {
        provide: 'ErrorHandlerService',
        useValue: errorHandlerServiceSpy
      }]
    });
  });
  it('should be created', () => {
    const service: CharacterService = TestBed.get(CharacterService);
    expect(service).toBeTruthy();
  });
});
