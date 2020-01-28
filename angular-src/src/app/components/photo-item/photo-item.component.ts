import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {
  @Input() photo:Photo

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  saved():Boolean{
    return this.photo.savedBy.findIndex(user => user.username === this.authService.loadedUser.username) >= 0
    
  }
  loved():Boolean{
    return this.photo.lovedBy.findIndex(user => user.username === this.authService.loadedUser.username) >= 0
    
  }
}
