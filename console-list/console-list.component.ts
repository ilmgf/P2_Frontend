import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../get.service';
import { Console } from '../objects/Console';

@Component({
  selector: 'app-console-list',
  templateUrl: './console-list.component.html',
  styleUrls: ['./console-list.component.css']
})
export class ConsoleListComponent implements OnInit {
  constructor(private _GetService:GetService, private route:ActivatedRoute) { }
  
  consoles:Console[] | any;
  pname:string | any;

  ngOnInit(): void {
    this._GetService.getAllConsoles().subscribe(data=>{ this.consoles = data})
  }

  addToCart(ptitle:string): void {
      this.pname=ptitle;

    this._GetService.addItemToCart(this.pname)
    console.log("added to cart "+this.pname);
  }
}
