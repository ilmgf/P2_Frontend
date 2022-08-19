import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
addtocart(){
  alert('Item added to cart');
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
