import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Console } from './objects/Console';
import { Customer } from './objects/Customer';
import { Cart } from './objects/Cart';
import { Transaction } from './objects/Transaction';


@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseurl = "http://localhost:8080/g-corp";
  customer:Customer | any;
  
  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  }
  getSingleConsole(ptitle:string):Observable<Console>{
    return this.http.get<Console>(this.baseurl+"/console/"+ptitle)
  }

  getAllConsoles():Observable<Console>{
    return this.http.get<Console>(this.baseurl+"/console/all-consoles")
  }
  
  getCustomer(username:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseurl+"/user/username/"+username)
  }

  addItemToCart(ptitle:string):Observable<Cart>{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    return this.http.post<Cart>(this.baseurl+"/console/"+ptitle+"/addtocart", this.customer)
  }

  getCustomersCart(customer:Customer):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/cart", customer)
  }
  
  updateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.baseurl+"/customer/"+customer.id, customer)
  }

  updateCart(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.baseurl+"/updateCart", cart)
  }
  removeItemFromCart(customer:Customer,ptitle:string):Observable<Cart>{
    return this.http.post<Cart>(this.baseurl+"/console/"+ptitle+"/removefromcart", customer)
  }

}