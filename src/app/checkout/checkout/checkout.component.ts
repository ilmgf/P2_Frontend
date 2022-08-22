import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/checkout.service';
import { Cart } from 'src/app/objects/Cart';
import { consoles } from 'src/app/objects/consoles';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

cart:Cart | any;


  constructor(private _checkoutService:CheckoutService) {}
    
  ngOnInit(): void {
    this._checkoutService.getCustomersCart().subscribe(data=>{ this.cart = data});
    this._checkoutService.checkoutCustomer(this.cart);
  }

}