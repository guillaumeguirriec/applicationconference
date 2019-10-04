import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentateursPage } from './presentateurs.page';

describe('PresentateursPage', () => {
  let component: PresentateursPage;
  let fixture: ComponentFixture<PresentateursPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentateursPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentateursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
