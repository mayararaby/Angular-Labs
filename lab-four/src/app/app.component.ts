import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-Four';
  
  DataFromLogin:any;

  ReciveData(data:any){
    this.DataFromLogin = data;
  }
  onestudent:any;
  Recive(data:any){
    this.onestudent = data;
  }
}
