import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsitehomePage } from './websitehome.page';

describe('WebsitehomePage', () => {
  let component: WebsitehomePage;
  let fixture: ComponentFixture<WebsitehomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitehomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
