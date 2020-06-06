import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchIconComponent } from './document-search-icon.component';

describe('DocumentSearchIconComponent', () => {
  let component: DocumentSearchIconComponent;
  let fixture: ComponentFixture<DocumentSearchIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSearchIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
