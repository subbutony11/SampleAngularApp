import { Component,OnInit } from '@angular/core';
import { AlertService } from './alert-service.service';
import { ErrorHandlerService } from './error-handler.service'
import { Router, RouterEvent, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showError: boolean;
  errorMessage: string;
  priorTimeout;

  constructor(private alertService: AlertService,
              private router: Router,
              private errorHandlerService: ErrorHandlerService
              ){
  }

  ngOnInit(){
    //handle errors resolving routes.
    this.router.events.subscribe(this.handleNavigationError.bind(this));
    
    this.alertService.getAlertListObservable().subscribe(this.handleAlert.bind(this));
  }

  handleNavigationError(event: RouterEvent){
    if(event instanceof NavigationError)
    {
      this.errorHandlerService.handleError(event.error);
    }
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
    }, 5000);
  }
}
