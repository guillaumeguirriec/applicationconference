import { TestBed } from '@angular/core/testing';

import { SpeakersRepositoryService } from './speakers-repository.service';

describe('SpeakersRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeakersRepositoryService = TestBed.get(SpeakersRepositoryService);
    expect(service).toBeTruthy();
  });
});
