import { TestBed } from '@angular/core/testing';

import { PhotoItemService } from './photo-item.service';

describe('PhotoItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoItemService = TestBed.get(PhotoItemService);
    expect(service).toBeTruthy();
  });
});
