import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { consoles } from './objects/consoles';
import { Customer } from './objects/customer';
import { Cart } from './objects/Cart';


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
  getSingleConsole(title:string):Observable<consoles>{
    return this.http.get<consoles>(this.baseurl+"/consoles/"+title)
  }

  getAllConsoles():Observable<consoles>{
    return this.http.get<consoles>(this.baseurl+"/consoles/all-consoles")
  }
  
  getCustomer(username:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseurl+"/user/username/"+username)
  }

  addItemToCart(title:string):Observable<Cart>{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    return this.http.post<Cart>(this.baseurl+"/consoles/"+title+"/addtocart", this.customer)
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
}