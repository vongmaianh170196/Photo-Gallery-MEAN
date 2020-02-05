import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  urlPhoto:string='http://localhost:5000/api/photos';
  urlUser:string = 'http://localhost:5000/api/user';

  constructor(private http:HttpClient, private authService: AuthService) { }

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.urlPhoto);
  }

  getMyUploads():Observable<Photo[]>{
    const header = new HttpHeaders({
      'x-auth-token': this.authService.token
    })
    //res.json(photos)
    return this.http.get<Photo[]>(this.urlPhoto + `/${this.authService.loadedUser._id}`, {headers: header})
  }

  getSavedPhotos():Observable<Photo[]>{
    const header = new HttpHeaders({
      'x-auth-token': this.authService.token
    })
    return this.http.get<Photo[]>(this.urlUser + '/saved', {headers: header})
  }

  addPhoto(photo:Photo){
    var headers = new HttpHeaders({
      'x-auth-token': this.authService.token
    })
    var formData = new FormData();
    formData.append("caption", photo.caption);
    formData.append("path", photo.path);
    formData.append("title", photo.title)
    return this.http.post<Photo>(this.urlPhoto + "/upload", formData, {headers: headers});
  }
  deletePhoto(photo:Photo):Observable<Photo>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.authService.token
    })
    
    return this.http.delete<Photo>(this.urlPhoto + `/${photo._id}`, {headers: headers});
  }
}
