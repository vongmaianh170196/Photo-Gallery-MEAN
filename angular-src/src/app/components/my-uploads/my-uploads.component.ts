import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/Photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-my-uploads',
  templateUrl: './my-uploads.component.html',
  styleUrls: ['./my-uploads.component.css']
})
export class MyUploadsComponent implements OnInit {

  photos:Photo[];
  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getMyUploads().subscribe(data => this.photos = data)
  }

}
