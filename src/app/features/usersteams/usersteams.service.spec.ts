import { TestBed } from '@angular/core/testing';

import { UsersteamsService } from './usersteams.service';

describe('UsersteamsService', () => {
  let service: UsersteamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersteamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
