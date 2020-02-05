import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username:string;
  password:string;
  avatar:string;

  constructor(private modalService: NgbModal, private authService: AuthService, private ngFlashMessage: NgFlashMessageService) { }

  ngOnInit() {
    this.authService.loadUser(this.authService.token);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
   
  }
  fileUploadChange(event){
    this.avatar = event.target.files[0];
  }
  
  onRegister(){
    const user ={
      username: this.username,
      password: this.password,
      avatar: this.avatar
    }
    if(!this.authService.validateInput(user)){
      this.ngFlashMessage.showFlashMessage({
        messages: ["Please fill in all the required fields"],
        dismissible: true, 
        timeout: 3000,
        type: 'danger'
      })
    }
    else{
      this.authService.registerUser(user).subscribe(data => {
        this.ngFlashMessage.showFlashMessage({
          messages: ["Your account is successfully registered"],
          dismissible: true, 
          timeout: 3000,
          type: 'success'
        })
        this.authService.loadUser(data.token)
      })
      
      this.modalService.dismissAll("close modal");
    }
  }
  onLogin(){
    const user ={
      username: this.username,
      password: this.password,
    }
    if(!this.authService.validateInput(user)){
      this.ngFlashMessage.showFlashMessage({
        messages: ["Please fill in all the required fields"],
        dismissible: true, 
        timeout: 3000,
        type: 'danger'
      })
    }
    else{
      this.authService.loginUser(user).subscribe(data => this.authService.loadUser(data.token))  
      this.modalService.dismissAll("close modal");
    }
  }
  onLogout(){
    this.authService.logoutUser();
    this.username="";
    this.password="";
    this.avatar="";
  }
}
