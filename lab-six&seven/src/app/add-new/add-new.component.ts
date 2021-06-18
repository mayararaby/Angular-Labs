import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../firstService.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  constructor(private ourService:FirstServiceService, private routes:Router) { }
  ngOnInit(): void {
    console.log("test")
  }
  Add(inputName:string, inputEmail:string, inputPhone:string, inputUserName:string,inputSite:string,inputCity:string, inputStreet:string )
  { 
    let user : {
      name:string, 
      email:string, 
      phone:string,
      userName:string,
      site:string,
      address: any
    } = {
      name:inputName, 
      email:inputEmail, 
      phone:inputPhone,
      userName:inputUserName,
      site:inputSite,
      address: {
        city:inputCity, street:inputStreet
      }
    };
    console.log(user);
    this.ourService.AddUser(user).subscribe(()=>{
      this.routes.navigateByUrl('users')
    });
  }
}
