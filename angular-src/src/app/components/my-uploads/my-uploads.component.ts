import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotoService } from 'src/app/services/photo.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.css']
})
export class MyUploadsComponent implements OnInit {

  photos:Photo[];
  filters:Object[];
  constructor(
    private photoService: PhotoService, 
    private ngFlashMessage: NgFlashMessageService, 
    private authService: AuthService,
    private router:Router) {
    this.filters = this.photoService.getFilterOptions();
  }

  ngOnInit() {
    if(!this.authService.isAuthenticated) this.router.navigate(['/'])
    this.photoService.getMyUploads().subscribe(data => this.photos = data)
  }
  onFilter(event){
    console.log(event.target.value)
    switch(event.target.value){
      case "1":
        this.photos = this.photos.sort((a:Photo,b:Photo) => {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        })
        break;
      case "2":
        this.photos = this.photos.sort((a:Photo,b:Photo) => {
          var x = a.title.toLowerCase();
          var y = b.title.toLowerCase();
          if (x > y) {return -1;}
          if (x < y) {return 1;}
          return 0;
        })
        break;
      case "3":
        this.photos = this.photos.sort((a:Photo, b:Photo) => a.lovedBy.length - b.lovedBy.length);
        break;
      default:
        return this.photos
    }
    console.log(this.photos)
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
