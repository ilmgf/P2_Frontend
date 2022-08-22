import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { consoles } from './objects/consoles';
import { customer } from './objects/customer';
import { Cart } from './objects/Cart';


@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseurl = "http://localhost:8080/jamba";
  customer:customer | any;
  
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
    return this.http.get<consoles>(this.baseurl+"/movie/all-movies")
  }
  
  getCustomer(username:string):Observable<customer>{
    return this.http.get<customer>(this.baseurl+"/customer/username/"+username)
  }

  addItemToCart(title:string):Observable<Cart>{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as customer;
    return this.http.post<Cart>(this.baseurl+"/consoles/"+title+"/addtocart", this.customer)
  }

  getCustomersCart(customer:customer):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/cart", customer)
  }
  
 

  updateCart(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.baseurl+"/updateCart", cart)
  }
}