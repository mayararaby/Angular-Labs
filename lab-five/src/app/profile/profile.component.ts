import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id=0;
  constructor(private ourActivated : ActivatedRoute) {
    this.id=this.ourActivated.snapshot.params.id
  }


  ngOnInit(): void {
  }

}
