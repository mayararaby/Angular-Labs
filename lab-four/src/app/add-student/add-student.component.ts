import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  
  ngOnChanges(changes: any): void {
    if(this.student){
      this.students.push(this.student);
    }
  }
  ngOnInit(): void {
  }
  students:{name:string, age:number}[]=[];
  @Input() student:any;
} 


