import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/get.service';
import { Cart } from 'src/app/objects/Cart';
import { transaction } from 'src/app/objects/transaction';
import { NavigationStart, Router } from '@angular/router';
import { CheckoutService } from 'src/app/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:Cart | any;
private routeSub:any; 

  constructor(private _GetService:GetService, private _checkoutService: CheckoutService, private router:Router) { }

  ngOnInit(): void {
    this._checkoutService.getCustomersCart().subscribe((data: any)=>{ this.cart = data});
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._GetService.updateCart(this.cart);
      }
    });
  }

  public ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  removeItem(title:string): void{
    this.cart.transactions.array.forEach((element: transaction, index: any) => {
      if(element.console.title==title) this.cart.transactions.array.splice(index,1);
    });
  }

}