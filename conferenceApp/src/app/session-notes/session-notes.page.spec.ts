import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionNotesPage } from './session-notes.page';

describe('SessionNotesPage', () => {
  let component: SessionNotesPage;
  let fixture: ComponentFixture<SessionNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionNotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
