import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheffordersPage } from './chefforders.page';

describe('CheffordersPage', () => {
  let component: CheffordersPage;
  let fixture: ComponentFixture<CheffordersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffordersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
