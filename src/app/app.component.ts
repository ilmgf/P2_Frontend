import { Component} from '@angular/core';
import { Router } from '@angular/router';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = "ecommerce-app"

  
  constructor() {//private modalService: NgbModal
  }
  public open(modal: any): void {
   // this.modalService.open(modal);
  }

  userIsLogedIn(): any{
    if(sessionStorage.getItem("currentUser")) {
      return true;
    }
  }
}
