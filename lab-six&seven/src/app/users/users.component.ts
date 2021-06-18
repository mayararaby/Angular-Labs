import { Component, OnInit } from '@angular/core';
import { FirstServiceService } from '../firstService.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ['']
})
export class UsersComponent implements OnInit {

  constructor(private ourService:FirstServiceService,private routes:Router) { }

  users:any;
  ngOnInit(): void {
    this.ourService.GetAllUsers().subscribe(
      (res)=>{  //Success
        console.log(res);
        this.users = res;
      },
      (err)=>{console.log(err);} //Fail
    )

  }
  DeleteUser(id:any)
  {
    this.ourService.DeleteUserById(id).subscribe(()=>{
      this.routes.navigateByUrl('users')
    });
  }
}
