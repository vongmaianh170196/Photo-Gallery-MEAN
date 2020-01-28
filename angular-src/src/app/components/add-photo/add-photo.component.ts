import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  @Output() addPhoto: EventEmitter<any> = new EventEmitter();

  caption:string;
  path:string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  fileUploadChange(event){
    this.path = event.target.files[0];
  }
  onSubmit(){
    const photo = {
      caption: this.caption,
      path: this.path
    }
    
    this.addPhoto.emit(photo)
    this.modalService.dismissAll("close modal");
    this.path='';
    this.caption='';
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
   
  }

  
}
