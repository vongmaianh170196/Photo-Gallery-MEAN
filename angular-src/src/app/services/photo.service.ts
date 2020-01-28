import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url:string='http://localhost:5000/api/photos'

  constructor(private http:HttpClient) { }

  getPhotos():Observable<Photo[]>{
    return this.http.get<Photo[]>(this.url);
  }

  addPhoto(photo:Photo){
    var formData = new FormData();
    formData.append("caption", photo.caption);
    formData.append("path", photo.path);
    return this.http.post<Photo>(this.url + "/upload", formData);
  }
}
