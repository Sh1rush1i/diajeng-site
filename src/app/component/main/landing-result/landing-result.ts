import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-landing-result',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './landing-result.html',
  styleUrl: './landing-result.css',
  providers: [MessageService],
})
export class LandingResult {
  itemForDisplay: any;

  constructor(
    library: FaIconLibrary,
    private messageService: MessageService,
    private router: Router,
  ) {
    library.addIconPacks(fas);
  }

  async ngOnInit() {
    await this.getItemForDisplay();
  }

  async getItemForDisplay() {
    console.log('Memanggil getItemForDisplay...');
    const storedItem = localStorage.getItem('selectedItems');
    console.log('Raw dari localStorage:', storedItem);

    this.itemForDisplay = storedItem ? JSON.parse(storedItem) : null;

    if (this.itemForDisplay) {
      console.log('Item untuk ditampilkan:', this.itemForDisplay);
    } else {
      console.log('Tidak ada data tersimpan.');
      this.messageService.add({
        severity: 'warn',
        summary: 'Data Kosong',
        detail: 'Belum ada item tersimpan di local storage.',
      });
    }
  }

  callMawl() {
    const number = '087757639686';
    const message = `Mas Maula, nanti kita main ${this.itemForDisplay?.dataMainDiajeng?.game?.name} ini ya kapannya ${
      this.itemForDisplay?.dataMainDiajeng?.date
        ? formatDate(this.itemForDisplay.dataMainDiajeng.date, 'dd MMMM yyyy : HH:mm', 'id-ID')
        : ''
    }, ditunggu diajeng ya mas 🪷🪷🪷 ~`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
