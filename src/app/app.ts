import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('diajeng-site');

  ngOnInit() {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease',
      mirror: true,
    });
  }
}
