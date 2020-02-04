import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private authService: AuthService, private photoItemService: PhotoItemService, private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
   
  }
  saved():Boolean{
    if(this.authService.isAuthenticated){
      return this.photo.savedBy.findIndex(saved => saved.user === this.authService.loadedUser._id) >= 0
    }
    
  }
  loved():Boolean{
    if(this.authService.isAuthenticated){
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
}
