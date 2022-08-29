import { Component, OnInit } from '@angular/core';
import { Console } from 'src/app/objects/Console';
import { GetService } from 'src/app/get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private _GetService:GetService, private route:ActivatedRoute) { }

  consoles:Console[] | any;
  ptitle: string | any;
  pname:string| any;

  
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.ptitle=params['ptitle'];
    });
    this._GetService.getSingleConsole(this.pname).subscribe(data=>{ this.consoles = data})

  }
addToCart(ptitle:string){
  alert('Item added to cart');
  this.pname=ptitle;

  this._GetService.addItemToCart(this.pname)
    console.log("added to cart "+this.pname);
}

  images = [
    {
    imageSrc:"https://alfabetajuega.com/hero/2020/05/PS2-Alfabetajuega.png?width=1200&aspect_ratio=1200:631",
    imageAlt: "playStation2",
    },
    {
      imageSrc:"https://t2.tudocdn.net/283346?w=1920",
      imageAlt: "Xbox",
      },
      {
        imageSrc:"https://i.ytimg.com/vi/oWocebisb5k/maxresdefault.jpg",
        imageAlt:"Gamecube",
      }
  ]
}
