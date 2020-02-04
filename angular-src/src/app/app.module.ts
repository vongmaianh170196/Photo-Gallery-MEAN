import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgFlashMessagesModule } from 'ng-flash-messages';

import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AuthComponent } from './components/auth/auth.component';
import { SavedPhotoComponent } from './components/saved-photo/saved-photo.component';
import { MyUploadsComponent } from './components/my-uploads/my-uploads.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  {path: '', component: PhotosComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'saved', component: SavedPhotoComponent},
  {path: 'my_uploads', component: MyUploadsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    PhotoItemComponent,
    AddPhotoComponent,
    NavbarComponent,
    AuthComponent,
    SavedPhotoComponent,
    MyUploadsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
