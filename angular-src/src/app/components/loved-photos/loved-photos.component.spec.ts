import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovedPhotosComponent } from './loved-photos.component';

describe('LovedPhotosComponent', () => {
  let component: LovedPhotosComponent;
  let fixture: ComponentFixture<LovedPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovedPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
