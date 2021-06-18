import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ourValidation = new FormGroup({
    name: new FormControl("",Validators.required),
    age: new FormControl(20, [Validators.min(18), Validators.max(30)])
  });

  get NameValid(){
    return this.ourValidation.controls.name.valid;
  }
  get AgeValid(){
    return this.ourValidation.controls.age.valid;
  }
  Check(){
    if(this.ourValidation.valid)
      console.log("Done")
    else
      console.log("Failed To Add")
  }

}
