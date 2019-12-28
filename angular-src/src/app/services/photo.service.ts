import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Photo } from '../models/Photo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url:string='http://localhost:5000/api/photos/upload'

  constructor(private http:HttpClient) { }

  getPhotos(){

  }

  addPhoto(photo:Photo):Observable<Photo>{
    return this.http.post<Photo>(this.url, photo, httpOptions);
  }
}
