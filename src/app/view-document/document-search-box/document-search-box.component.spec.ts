import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSearchBoxComponent } from './document-search-box.component';

describe('DocumentSearchBoxComponent', () => {
  let component: DocumentSearchBoxComponent;
  let fixture: ComponentFixture<DocumentSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentSearchBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
