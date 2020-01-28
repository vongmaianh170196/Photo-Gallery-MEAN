import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url:string='http://localhost:5000/api/photos'

  constructor(private http:HttpClient, private authService: AuthService) { }

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.url);
  }

  addPhoto(photo:Photo){
    var headers = new HttpHeaders({
      'x-auth-token': this.authService.token
    })
    var formData = new FormData();
    formData.append("caption", photo.caption);
    formData.append("path", photo.path);
    formData.append("title", photo.title)
    return this.http.post<Photo>(this.url + "/upload", formData, {headers: headers});
  }
}
