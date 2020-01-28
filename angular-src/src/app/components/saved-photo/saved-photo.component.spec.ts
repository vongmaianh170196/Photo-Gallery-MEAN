import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedPhotoComponent } from './saved-photo.component';

describe('SavedPhotoComponent', () => {
  let component: SavedPhotoComponent;
  let fixture: ComponentFixture<SavedPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
