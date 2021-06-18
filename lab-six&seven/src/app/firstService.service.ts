import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(private ourClient:HttpClient) {}
  BaseUrl = "http://localhost:3000/users";
    
  GetAllUsers(){
    return this.ourClient.get(this.BaseUrl);
  }
  GetUserById(id:number){
    return this.ourClient.get(`${this.BaseUrl}/${id}`);
  }
  AddUser(user:any){
    return this.ourClient.post(this.BaseUrl, user);
  }

  DeleteUserById(id:number){
    return this.ourClient.delete(`${this.BaseUrl}/${id}`);
  }
}
