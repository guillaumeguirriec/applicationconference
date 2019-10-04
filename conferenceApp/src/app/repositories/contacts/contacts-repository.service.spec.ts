import { TestBed } from '@angular/core/testing';

import { ContactsRepositoryService } from './contacts-repository.service';

describe('ContactsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsRepositoryService = TestBed.get(ContactsRepositoryService);
    expect(service).toBeTruthy();
  });
});
