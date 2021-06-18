import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirstServiceService } from '../firstService.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: ['']
})
export class UserDetailsComponent implements OnInit {
  id=0;
  user:any;
  constructor(ourActivated:ActivatedRoute,private ourService:FirstServiceService) {
    this.id = ourActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.ourService.GetUserById(this.id).subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    );
  }

}
