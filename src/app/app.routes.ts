import { Routes } from '@angular/router';
import { LandingConfirmation } from './component/main/landing-confirmation/landing-confirmation';
import { LandingForm } from './component/main/landing-form/landing-form';
import { LandingResult } from './component/main/landing-result/landing-result';

export const routes: Routes = [
  { path: '', component: LandingConfirmation },
  { path: 'diisi-ya-diajeng-cantik', component: LandingForm },
  { path: 'ini-ya-jadwalnya', component: LandingResult },
];
