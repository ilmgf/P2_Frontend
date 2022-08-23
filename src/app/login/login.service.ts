import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../objects/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public username!: string;
  public password!: string;
  baseUrl = "http://localhost:8080/g-corp/login";
  public currentUser: customer = {
    id: 1,
    username: '',
    password: '',
  };
  constructor(private http: HttpClient) { }

  loginCustomer(customer: customer): Observable<object> {
    console.log(customer)
  return this.http.post(`${this.baseUrl}`,customer);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  loginCheck(username: string, password: string): Observable<customer> {
    let passlower: string = password.toLowerCase();
    let params = new HttpParams().set('username', username).set('password', passlower);
    return this.http.get<customer>(this.baseUrl + 'login', { params: params });
  }
}

