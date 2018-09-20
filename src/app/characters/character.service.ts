import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { character } from '../types/character';
import { catchError } from 'rxjs/operators'
import { ErrorHandlerService } from '../error-handler.service'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient,
    private errorHandlerService: ErrorHandlerService) { }

  getCharacterInfo(character: character) {
    return this.http.get<character>(character.url)
      .pipe(catchError(this.errorHandlerService.handleError()));
  }
}
