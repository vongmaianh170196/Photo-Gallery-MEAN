import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string='/api/user'
  isAuthenticated:boolean = false;
  token:string
  loadedUser:User
  constructor(private http:HttpClient) { }

  loadUser(token:string):User{
    this.token = token;
    if(this.token){
      let headers = new HttpHeaders({
        'Content-type': 'application/json',
        'x-auth-token': this.token
      });
     
      this.http.get<User>(this.url + '/auth', {headers: headers}).subscribe(data => this.loadedUser = data)
      this.isAuthenticated=true
      return this.loadedUser;
    }
  }

  validateInput({username, password}){
    if(username === undefined || password === undefined ){
      return false;
    }
    else{
      return true;
    }
  }
  registerUser(user:any):Observable<any>{
    var formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("avatar", user.avatar);
    return this.http.post(this.url + '/register', formData )
  } 

  loginUser(user:any):Observable<any>{
    return this.http.post(this.url + '/login', JSON.stringify(user), httpOptions);
  }
 
  logoutUser(){
    this.isAuthenticated = false;
  }
  
  
}
