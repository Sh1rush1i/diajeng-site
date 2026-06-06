import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingConfirmation } from './landing-confirmation';

describe('LandingConfirmation', () => {
  let component: LandingConfirmation;
  let fixture: ComponentFixture<LandingConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingConfirmation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingConfirmation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
