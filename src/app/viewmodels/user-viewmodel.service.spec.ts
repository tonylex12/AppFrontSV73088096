import { TestBed } from '@angular/core/testing';

import { UserViewmodelService } from './user-viewmodel.service';

describe('UserViewmodelService', () => {
  let service: UserViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
