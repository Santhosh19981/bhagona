import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderconfirmPage } from './orderconfirm.page';

describe('OrderconfirmPage', () => {
  let component: OrderconfirmPage;
  let fixture: ComponentFixture<OrderconfirmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
