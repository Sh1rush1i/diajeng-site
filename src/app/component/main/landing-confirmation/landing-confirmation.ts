import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastModule } from 'primeng/toast';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-landing-confirmation',
  imports: [FontAwesomeModule, ToastModule, CommonModule],
  templateUrl: './landing-confirmation.html',
  styleUrl: './landing-confirmation.css',
  providers: [MessageService],
})
export class LandingConfirmation {
  isNextSequence: number = 0;
  isDeclined: boolean = false;

  constructor(
    library: FaIconLibrary,
    private messageService: MessageService,
    private router: Router,
  ) {
    library.addIconPacks(fas);
  }

  nextSequence(): void {
    this.isNextSequence++;

    if (this.isNextSequence === 2) {
      confetti({ particleCount: 300, angle: 60, spread: 200, origin: { x: 0 } });
      confetti({ particleCount: 300, angle: 120, spread: 200, origin: { x: 1 } });
    }
  }

  runAway(btn: HTMLElement) {
    const currentTransform = btn.style.transform || 'translate(0px, 0px)';
    const match = currentTransform.match(/translate\(([-\d]+)px,\s*([-\d]+)px\)/);

    let currentX = match ? parseInt(match[1], 10) : 0;
    let currentY = match ? parseInt(match[2], 10) : 0;

    const offsetX = (Math.random() - 0.5) * 500;
    const offsetY = (Math.random() - 0.5) * 500;

    const newX = currentX + offsetX;
    const newY = currentY + offsetY;

    btn.style.transition = 'transform 0.3s ease';
    btn.style.transform = `translate(${newX}px, ${newY}px)`;
  }

  gamawClicked() {
    this.messageService.add({
      severity: 'error',
      summary: '😡😡😡',
      detail: 'Harus maw diajeng pokoknya! > _ <',
    });

    this.isDeclined = true;
  }

  gotoForm() {
    this.router.navigate(['/diisi-ya-diajeng-cantik']);
  }
}
