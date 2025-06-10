import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerordersPage } from './customerorders.page';

describe('CustomerordersPage', () => {
  let component: CustomerordersPage;
  let fixture: ComponentFixture<CustomerordersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
