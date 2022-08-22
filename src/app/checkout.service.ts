import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './objects/Cart';
import { customer } from './objects/customer';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseurl = "http://localhost:8080/home";
  customer: customer | any;

  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    getCustomersCart():Observable<Cart>{
      let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
      this.customer=jsonObj as customer;
      return this.http.put<Cart>(this.baseurl+"/cart", this.customer)
    }

    checkoutCustomer(cart:Cart):Observable<Cart>{
      return this.http.put<Cart>(this.baseurl+"/checkout", cart)
    }
  
}