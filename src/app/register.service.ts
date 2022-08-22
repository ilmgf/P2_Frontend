import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { customer } from './objects/customer';

@Injectable({
    providedIn: 'root'
  })
  export class RegisterService {
  
    constructor(private _http:HttpClient) { }
    
    public authenticateUser(customer:customer) : Observable<any>{
      return this._http.post<any>("http://localhost:4200/login",customer)
      .pipe(map(customer => {
        sessionStorage.setItem("currentUser", JSON.stringify(customer));
        sessionStorage.setItem("username", customer.username);
        sessionStorage.setItem("password", customer.password);
        return customer;
      }))
    }
    
    public registerPage(customer:customer) : Observable<any>{
      return this._http.post<any>("http://localhost:4200/register",customer)
    }
  }