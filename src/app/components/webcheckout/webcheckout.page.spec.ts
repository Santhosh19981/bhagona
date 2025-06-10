import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebcheckoutPage } from './webcheckout.page';

describe('WebcheckoutPage', () => {
  let component: WebcheckoutPage;
  let fixture: ComponentFixture<WebcheckoutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
