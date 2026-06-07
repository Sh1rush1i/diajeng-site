import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingForm } from './landing-form';

describe('LandingForm', () => {
  let component: LandingForm;
  let fixture: ComponentFixture<LandingForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
