import { Component,OnInit } from '@angular/core';
import { AlertService } from './alert-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showError: boolean;
  errorMessage: string;
  priorTimeout;

  constructor(private alertService: AlertService){
  }

  ngOnInit(){
    this.alertService.getAlertListObservable().subscribe(this.handleAlert.bind(this));
  }

  handleAlert(message){
    if (this.priorTimeout){
      clearTimeout(this.priorTimeout);
    }

    this.errorMessage = message;
    this.showError = true;

    this.priorTimeout = setTimeout(() => {
      this.showError = false;
      this.priorTimeout = null;
    }, 6000);
  }
}
