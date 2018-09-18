import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alerts : Subject<string> = new Subject<string>();

  constructor() { }

  addAlert(message:string){
    this.alerts.next(message);
  }

  getAlertListObservable():Observable<string>{
    return this.alerts.asObservable();
  }
}
