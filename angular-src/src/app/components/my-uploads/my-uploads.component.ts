import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotoService } from 'src/app/services/photo.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.css']
})
export class MyUploadsComponent implements OnInit {

  photos:Photo[];
  constructor(private photoService: PhotoService, private ngFlashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.photoService.getMyUploads().subscribe(data => this.photos = data)
  }
  addPhoto(photo:Photo){        
    this.photoService.addPhoto(photo).subscribe(res => {
      this.photos.unshift(res);
      this.ngFlashMessage.showFlashMessage({
        messages: ["Photo is added"],
        dismissible: true, 
        timeout: 3000,
        type: 'success'
      })
    })
  }

  deletePhoto(photo:Photo){
    this.photos = this.photos.filter(pt => pt._id !== photo._id)  
    this.photoService.deletePhoto(photo).subscribe(() => {
        this.ngFlashMessage.showFlashMessage({
        messages: ["Photo is removed"],
        dismissible: true, 
        timeout: 3000,
        type: 'success'
      })
    }) 
  }
}
