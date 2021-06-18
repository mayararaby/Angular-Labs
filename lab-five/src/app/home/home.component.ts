import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students:{name:string , age:number}[]=[];
  constructor() {
    this.students=[
      {name:"Mayar",age:23},
      {name:"Manar",age:24},
      {name:"Mariem",age:25}
    ]
  }

  ngOnInit(): void {
  }
}
