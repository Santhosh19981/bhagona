import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurservicePage } from './ourservice.page';

describe('OurservicePage', () => {
  let component: OurservicePage;
  let fixture: ComponentFixture<OurservicePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OurservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
