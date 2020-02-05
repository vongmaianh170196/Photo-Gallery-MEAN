import { Component, OnInit} from '@angular/core';
import {Photo} from '../../models/Photo'
import { PhotoService } from 'src/app/services/photo.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos:Photo[];
  showedPhotos: Photo[];
  searchInput:string;
  constructor(private photoService:PhotoService, private ngFlashMessage: NgFlashMessageService) { }

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
    this.photoService.addPhoto(photo).subscribe(res => {
      this.showedPhotos.push(res);
      this.ngFlashMessage.showFlashMessage({
        messages: ["Photo is added"],
        dismissible: true, 
        timeout: 3000,
        type: 'success'
      })
    })
  }

  deletePhoto(photo:Photo){
    this.showedPhotos = this.showedPhotos.filter(pt => pt._id !== photo._id)  
    console.log("Photos component: " + photo._id)
    this.photoService.deletePhoto(photo).subscribe() 
    // this.ngFlashMessage.showFlashMessage({
    //   messages: ["Photo is removed"],
    //   dismissible: true, 
    //   timeout: 3000,
    //   type: 'success'
    // })
  }
}
