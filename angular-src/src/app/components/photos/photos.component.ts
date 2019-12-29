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
    this.photos = [
      {
        id: "abc",
        caption:"Testing",
        link: ""
      },
      {
        id: "abcz2",
        caption:"Testing2",
        link: ""
      }
    ]
  }
  addPhoto(photo){    
    var formData = new FormData();
    formData.append("caption", photo.caption);
    formData.append("link", photo.link);
    this.photoService.addPhoto(formData).subscribe(res => console.log(res))
  }
}
