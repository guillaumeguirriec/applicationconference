import { TestBed } from '@angular/core/testing';

import { SpeakersService } from './speakers.service';

describe('SpeakersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeakersService = TestBed.get(SpeakersService);
    expect(service).toBeTruthy();
  });
});
