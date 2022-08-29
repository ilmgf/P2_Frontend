import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../get.service';

@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.css']
})
export class ConsolePageComponent implements OnInit {
  console:Console | any;
  pname: string | any;
  
    constructor(private _GetService:GetService, private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(params =>{
        this.pname=params['ptitle'];
      });
      this._GetService.getSingleConsole(this.pname).subscribe(data=>{ this.console = data})
  
  
    }
  
    addToCart(ptitle:string/* ,customer:Customer */): void {
      this.pname=ptitle;
  /*     this._getService.addItemToCart(customer, this.name) */
    console.log("added to cart "+this.pname);
  }
  
  }