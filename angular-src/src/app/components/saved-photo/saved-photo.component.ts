import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-saved-photo',
  templateUrl: './saved-photo.component.html',
  styleUrls: ['./saved-photo.component.css']
})
export class SavedPhotoComponent implements OnInit {

  photos:Photo[]
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getSavedPhotos().subscribe(data => this.photos = data)
  }

}
