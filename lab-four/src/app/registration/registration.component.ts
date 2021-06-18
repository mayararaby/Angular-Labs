import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Output('ourEvent') ourEvent = new EventEmitter();

  clicked(n:any, a:any){
    console.log(n, a);
    let student:{name:any, age:any}= {name:n, age:a};
    this.ourEvent.emit(student);
  }

}
