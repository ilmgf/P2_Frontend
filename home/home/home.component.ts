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
  ptitle!: string;
  pname:string| any;



  
  ngOnInit(): void {
    this.consoles = [ {
      "ptitle": "ps2 bundle",
    "pprice": "$399.99",
    "pdescription": "ps2 bundle with 2 games",
    "pname": "PS2 bundle",
   "consoleCoverLink": "https://th.bing.com/th/id/R.14732147edd87bcf51f1556704dc71af?rik=gANE6riPpG2hog&pid=ImgRaw&r=0",
    "pid": 1

    }]

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
