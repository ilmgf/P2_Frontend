import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer} from 'src/app/objects/Customer';
import { RegisterService } from 'src/app/register.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  customer:Customer= new Customer();
  invalidLogin = false;
  msg:string="";

  constructor(private router: Router,
     private _service: RegisterService,
    // private loginservice: LoginService,
     private _router: Router) { }


 
toRegister(){
  this.router.navigate(["/register"]);
}
  customerLogin() {
    // console.log("response recieve from user"+ this.customer.username)
    // this.loginservice.loginCustomer(this.customer).subscribe(data => {
    //   alert("Login Successfully")
    //   this.router.navigate(['/home'])
    // }, error=>alert("Sorry, please enter correct Username and Password"));
    this._service.authenticateUser(this.customer).subscribe(
      (data: any) => {
        // console.log("response recieve"),
        this._router.navigate(['/home'])
        this.invalidLogin = false;
        alert('You have successfully logged in! - Redirecting to home page');
      },
      (error: any) => {
        // console.log("exception occured"),
        this.msg="Enter Valid Username and Password"
        this.invalidLogin = true;
      }
    )
    
  
    }
    ngOnInit(): void {
    
  
    // this.service.authenticateUser(this.customer).subscribe(
    //   (data: any) => {
    //     this.router.navigate(['/home'])
    //     this.invalidLogin = false;
    //   },
    //   (error: any) => {
    //     // console.log("exception occured"),
    //     this.msg="Enter Valid Username and Password"
    //     this.invalidLogin = true;
    //   }
    }
  }