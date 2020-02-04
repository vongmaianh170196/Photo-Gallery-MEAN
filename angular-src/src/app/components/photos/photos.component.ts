import { Component, OnInit} from '@angular/core';
import {Photo} from '../../models/Photo'
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:Photo[];
  showedPhotos: Photo[];
  searchInput:string;
  constructor(private photoService:PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.showedPhotos = photos;
    })
  }
  
  search(){
    let text = this.searchInput;
    this.showedPhotos = this.photos
    if(text !== ""){
      this.showedPhotos = this.showedPhotos.filter(photo => photo.caption.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) >= 0);
    }
    else{
      this.ngOnInit()
    }
  }

  addPhoto(photo:Photo){        
    this.photoService.addPhoto(photo).subscribe(res => this.photos.push(res))
  }
}
