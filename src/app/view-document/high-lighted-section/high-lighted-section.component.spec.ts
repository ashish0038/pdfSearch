import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLightedSectionComponent } from './high-lighted-section.component';

describe('HighLightedSectionComponent', () => {
  let component: HighLightedSectionComponent;
  let fixture: ComponentFixture<HighLightedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighLightedSectionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLightedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
