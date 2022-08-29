import { Component, OnInit } from '@angular/core';
import { GetService } from '../get.service';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  // variable - default false
show: boolean = false;

  jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
  customer=this.jsonObj as Customer;
  constructor(private _service:GetService) { }

  ngOnInit(): void {
    console.log(this.customer);
  }


  onSubmit(editProfile:any){
    let updateForm = editProfile.value;
    console.log(updateForm);

    //Form Data
    this.customer.username = updateForm.inputUsername;
    this.customer.password = updateForm.inputPassword;
    this.customer.firstName = updateForm.inputFirstName;
    this.customer.lastName = updateForm.inputLastName;

    console.log(this.customer);

   
    this._service.updateCustomer(this.customer).subscribe(data=>this.customer=data);

    alert('Your account information has been updated');
  }
  
}