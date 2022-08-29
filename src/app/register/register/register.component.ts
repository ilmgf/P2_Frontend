import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/objects/Customer';
import { RegisterService } from 'src/app/register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();
  msg='';
  constructor(private _service: RegisterService, private _router: Router) { }

  ngOnInit(): void {
  }

  toLogin(){
    this._router.navigate(["/login"]);
  }

  registerCustomer(){
    this._service.registerPage(this.customer).subscribe (
      data => {
        console.log("response recieve");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exception occured");
        this.msg="Username Unavailable";
      }
    )
  }
}
