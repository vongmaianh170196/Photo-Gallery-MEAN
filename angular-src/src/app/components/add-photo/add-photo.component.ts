import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    // .result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
}
