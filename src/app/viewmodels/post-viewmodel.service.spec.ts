import { TestBed } from '@angular/core/testing';

import { PostViewmodelService } from './post-viewmodel.service';

describe('PostViewmodelService', () => {
  let service: PostViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
