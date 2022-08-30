import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from './objects/Customer';

@Injectable({
    providedIn: 'root'
  })
  export class RegisterService {
  
    constructor(private _http:HttpClient) { }
    
    public authenticateUser(customer:Customer) : Observable<any>{
      return this._http.post<any>("http://localhost:8080/g-corp/login",customer)
      .pipe(map(customer => {
        sessionStorage.setItem("currentUser", JSON.stringify(customer));
        sessionStorage.setItem("username", customer.username);
        sessionStorage.setItem("password", customer.password);
        return customer;
      }))
    }
    
    public registerPage(customer:Customer) : Observable<any>{
      return this._http.post<any>("http://localhost:8080/g-corp/register",customer)
    }
  }