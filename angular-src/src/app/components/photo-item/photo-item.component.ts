import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { AuthService } from 'src/app/services/auth.service';
import { PhotoItemService } from 'src/app/services/photo-item.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo:Photo
  @Output() deletePhoto: EventEmitter<Photo> = new EventEmitter();

  constructor(private authService: AuthService, private photoItemService: PhotoItemService, private modalService: NgbModal) { }

  ngOnInit() {
  }
  openLargeModal(content) {
    this.modalService.open(content, { size: 'lg' });
   
  }
  deletable():Boolean{
    if(this.authService.loadedUser){
      return this.photo.user === this.authService.loadedUser._id;
    }
  }
  saved():Boolean{
    if(this.authService.loadedUser){
      return this.photo.savedBy.findIndex(saved => saved.user === this.authService.loadedUser._id) >= 0
    }
    
  }
  loved():Boolean{
    if(this.authService.loadedUser){
      return this.photo.lovedBy.findIndex(loved => loved.user === this.authService.loadedUser._id) >= 0
    }
    
    
  }
  onSavePhoto(){
   
    if(!this.authService.isAuthenticated){
      alert("Please log in ")
      
    }
    else return this.photoItemService.savePhoto(this.photo._id).subscribe(data => this.photo.savedBy = data)
  }
  onUnsavePhoto(){
    return this.photoItemService.unsavePhoto(this.photo._id).subscribe(data => this.photo.savedBy = data)
  }
  onLovePhoto(){
    if(!this.authService.isAuthenticated){
      alert("Please log in ")
    }
    else return this.photoItemService.lovePhoto(this.photo._id).subscribe(data => this.photo.lovedBy = data)
  }
  onUnlovePhoto(){
    return this.photoItemService.unlovePhoto(this.photo._id).subscribe(data => this.photo.lovedBy = data)
  }
  onDeletePhoto(photo){
   this.deletePhoto.emit(photo)
  }
}
