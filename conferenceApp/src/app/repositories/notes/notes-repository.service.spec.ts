import { TestBed } from '@angular/core/testing';

import { NotesRepositoryService } from './notes-repository.service';

describe('NotesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesRepositoryService = TestBed.get(NotesRepositoryService);
    expect(service).toBeTruthy();
  });
});
