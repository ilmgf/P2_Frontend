import { Component, OnInit } from '@angular/core';
import { consoles } from 'src/app/objects/consoles';
import { GetService } from 'src/app/get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  console:consoles | any;
  name: string | any;

  constructor(private _GetService:GetService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.name=params['title'];
    });
    this._GetService.getSingleConsole(this.name).subscribe(data=>{ this.console = data})

  }
addtocart(title:string){
  alert('Item added to cart');
  this.name=title;
    console.log("added to cart "+this.name);
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
