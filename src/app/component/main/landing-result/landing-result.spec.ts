import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingResult } from './landing-result';

describe('LandingResult', () => {
  let component: LandingResult;
  let fixture: ComponentFixture<LandingResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
