import { TestBed } from '@angular/core/testing';

import { SessionsRepositoryService } from './sessions-repository.service';

describe('SessionsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionsRepositoryService = TestBed.get(SessionsRepositoryService);
    expect(service).toBeTruthy();
  });
});
