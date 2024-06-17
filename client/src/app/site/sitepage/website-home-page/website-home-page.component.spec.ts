import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHomePageComponent } from './website-home-page.component';

describe('WebsiteHomePageComponent', () => {
  let component: WebsiteHomePageComponent;
  let fixture: ComponentFixture<WebsiteHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteHomePageComponent]
    });
    fixture = TestBed.createComponent(WebsiteHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
