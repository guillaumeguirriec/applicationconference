import { TestBed } from '@angular/core/testing';

import { ScheduleRepositoryService } from './schedule-repository.service';

describe('ScheduleRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScheduleRepositoryService = TestBed.get(ScheduleRepositoryService);
    expect(service).toBeTruthy();
  });
});
