import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { customer } from 'src/app/objects/customer';
import { RegisterService } from 'src/app/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  customer= new customer();
  invalidLogin = false;
  msg:string="";

  constructor(private router: Router, private service: RegisterService) { }


 
toRegister(){
  this.router.navigate(["/register"]);
}
  loginCustomer() {
    this.service.authenticateUser(this.customer).subscribe(
      (data: any) => {
        // console.log("response recieve"),
        this.router.navigate(['/home'])
        this.invalidLogin = false;
      },
      (error: any) => {
        // console.log("exception occured"),
        this.msg="Enter Valid Username and Password"
        this.invalidLogin = true;
      }
    )
    }
    ngOnInit(): void {
    }
  
}
