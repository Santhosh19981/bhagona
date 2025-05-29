import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheffsPage } from './cheffs.page';

describe('CheffsPage', () => {
  let component: CheffsPage;
  let fixture: ComponentFixture<CheffsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
