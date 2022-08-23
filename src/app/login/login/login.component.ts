import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/objects/customer';
import { RegisterService } from 'src/app/register.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  customer= new customer();
  invalidLogin = false;
  msg:string="";

  constructor(private router: Router,
     private service: RegisterService,
     private loginservice: LoginService) { }


 
toRegister(){
  this.router.navigate(["/register"]);
}
  customerLogin() {
    console.log("response recieve from"+ this.customer)
    this.loginservice.loginCustomer(this.customer).subscribe(data => {
      alert("Login Successfully")
    }, error=>alert("Sorry, please enter correct Username and Password"));
    
  
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