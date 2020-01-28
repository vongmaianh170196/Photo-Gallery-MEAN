import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  @Output() addPhoto: EventEmitter<any> = new EventEmitter();

  title:string;
  caption:string;
  path:string;
  constructor(private modalService: NgbModal, private authService: AuthService) { }

  ngOnInit() {
  }
  fileUploadChange(event){
    this.path = event.target.files[0];
  }
  onSubmit(){
    const photo = {
      caption: this.caption,
      title:this.title,
      path: this.path
    }
    
    this.addPhoto.emit(photo)
    this.modalService.dismissAll("close modal");
    this.title='';
    this.path='';
    this.caption='';
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
   
  }

  
}
