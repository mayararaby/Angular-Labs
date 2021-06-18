import { Component} from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  name="";
  age:any="";
  getName(data:any ){
    this.name = data.target.value;
  }
  getAge(data:any ){
    this.age = data.target.value;
  }
  students:{name:string,age:number}[]=[];
  add()
  {
    let student:{name:string,age:number}={name:this.name,age:this.age}
    for(let i = 0 ; i <this.students.length; i++){
      if(this.students[i].name===student.name && this.students[i].age===student.age){
        alert("duplicate value")
        return 0;
      }
    }
    if((student.age> 18 && student.age< 60 ) && student.name != "")
      this.students.push(student)
    console.log(student)
    return 1;
  }
} 


