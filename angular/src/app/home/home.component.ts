import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data!: HallsShow[];
  cook!: CookShow[];

  constructor(private routes: Router) { }

  ngOnInit(): void {
      let data : HallsShow[];
      let cook: CookShow[];
      this.cook = [
        {
          "Special": "CJ Pallazio",
          "Experience": 14,
          "name":"Raja Kannu",
          "img" : "https://source.unsplash.com/600x900/?cook"
        },
        {
          "Special": "CJ Pallazio",
          "Experience": 14,
          "name":"Raja Kannu",
          "img" : "https://source.unsplash.com/600x900/?cook"
        },
        {
          "Special": "CJ Pallazio",
          "Experience": 14,
          "name":"Raja Kannu",
          "img" : "https://source.unsplash.com/600x900/?cook"
        },

      ]
      this.data = [
      {
        "id":1,
        "HallName": "CJ Pallazio",
        "Location": "salem",
        "Description": "magna nisi esse ipsum irure ullamco qui qui dolore anim",
        "img" : "https://source.unsplash.com/600x900/?tech,street"
      },
      {
        "id":2,
        "HallName": "CJ Pallazio",
        "Location": "chennai",
        "Description": "aute tempor enim ad excepteur sit pariatur exercitation ea labore",
        "img" : "https://source.unsplash.com/600x900/?tree,nature"
      },
      {
        "id":3,
        "HallName": "JJ Pallazio",
        "Location": "chennai",
        "Description": "duis labore et irure quis aliqua aliquip aute non aliquip",
        "img" : 
        "https://source.unsplash.com/600x900/?computer,design"
      },
      
    ]

    
  }
  View(hall: number)
  {
    this.routes.navigate(['halls/hallv'])


  }
}
export interface CookShow{
  Special:string,
  Experience: number,
  name:string,
  img:string

}
export interface HallsShow{
  id:number,
  HallName : string;
  Description : string;
  Location : string; 
  img : string;
}