import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DStudentComponent } from './d-student/d-student.component';

const routes:Routes=[
  {path:'', component:HomeComponent}, 
  {path:'home', component:HomeComponent}, 
  {path:'details/:id', component:ProfileComponent}, 
  {path:'students', component:StudentsComponent}, 
  {path:'**', component:ErrorComponent}, 
]


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent,
    HomeComponent,
    DStudentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
