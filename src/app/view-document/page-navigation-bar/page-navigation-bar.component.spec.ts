import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNavigationBarComponent } from './page-navigation-bar.component';

describe('PageNavigationBarComponent', () => {
  let component: PageNavigationBarComponent;
  let fixture: ComponentFixture<PageNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
