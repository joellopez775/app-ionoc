import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetecterPage } from './detecter.page';

describe('DetecterPage', () => {
  let component: DetecterPage;
  let fixture: ComponentFixture<DetecterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetecterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
