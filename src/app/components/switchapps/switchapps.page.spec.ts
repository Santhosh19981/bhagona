import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchappsPage } from './switchapps.page';

describe('SwitchappsPage', () => {
  let component: SwitchappsPage;
  let fixture: ComponentFixture<SwitchappsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchappsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
