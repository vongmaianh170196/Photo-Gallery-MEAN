import { Component, OnInit } from '@angular/core';
import {Photo} from '../../models/Photo'
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:Photo[];
  constructor(private photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos)
  }
  addPhoto(photo:Photo){        
    this.photoService.addPhoto(photo).subscribe(res => this.photos.push(res))
  }
}
