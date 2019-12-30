import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  @Output() addPhoto: EventEmitter<any> = new EventEmitter();

  caption:string;
  path:string;
  constructor() { }

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
  }

}
