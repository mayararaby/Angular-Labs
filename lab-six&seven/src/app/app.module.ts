import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FirstServiceService } from './firstService.service';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { FormsModule } from '@angular/forms';


const routes:Routes=[
  {path:'', redirectTo:'users', pathMatch:'full'},
  {path:'users', component:UsersComponent},
  {path:'users/:id', component:UserDetailsComponent}, 
  {path:'add-new', component:AddNewComponent}, 
  {path:'**', component:ErrorComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ErrorComponent,
    UserDetailsComponent,
    AddNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    
  ],
  exports: [ RouterModule ],
  providers: [
    FirstServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
