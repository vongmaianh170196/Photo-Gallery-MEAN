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

  url:string='http://localhost:5000/api/user'
  isAuthenticated:boolean = false;
  token:string
  constructor(private http:HttpClient) { }

  loadUser(){
    this.token = localStorage.getItem('x-auth-token');
    if(this.token){
      let headers = new HttpHeaders({
        'COntent-type': 'application/json',
        'x-auth-token': this.token
      });
     
      console.log(this.token)
      return this.http.get(this.url + '/auth', {headers: headers}).subscribe(data => console.log(data));
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
  
  storeToken(token:string){
    localStorage.setItem('x-auth-token', token);
    this.isAuthenticated = true;
  }
  logoutUser(){
    localStorage.clear();
    this.isAuthenticated = false;
  }
  registerUser(user):Observable<any>{
    var formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("avatar", user.avatar);
    return this.http.post(this.url + '/register', formData )
  } 

  loginUser(user):Observable<any>{
    return this.http.post(this.url + '/login', JSON.stringify(user), httpOptions);
  }
  
}
