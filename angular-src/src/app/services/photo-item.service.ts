import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Photo } from '../models/Photo';


@Injectable({
  providedIn: 'root'
})

export class PhotoItemService {
  url:string = 'http://localhost:5000/api/photos';


  constructor(private http:HttpClient, private authService:AuthService) {}
  getHttpOptions(token:string){
     return new HttpHeaders({
      'Content-type': 'application/json',
      'x-auth-token': token
    })
  }
  savePhoto(photo_id:string):Observable<any>{
    
    //res.json(photo.savedBy(user_id))
    return this.http.put(this.url + `/saved/${photo_id}`, null, {headers: this.getHttpOptions(this.authService.token)});
  }

  unsavePhoto(photo_id:string):Observable<any>{
    //res.json(photo.savedBy(user_id))
    return this.http.put(this.url + `/unsave/${photo_id}`, null, {headers: this.getHttpOptions(this.authService.token)});
  }

  lovePhoto(photo_id:string):Observable<any>{
    //res.json(photo.lovedBy(user_id))
    return this.http.put(this.url + `/loved/${photo_id}`, null, {headers: this.getHttpOptions(this.authService.token)});
  }

  unlovePhoto(photo_id:string):Observable<any>{
     //res.json(photo.lovedBy(user_id))
    return this.http.put(this.url + `/unlove/${photo_id}`, null, {headers: this.getHttpOptions(this.authService.token)});
  }
 

}
