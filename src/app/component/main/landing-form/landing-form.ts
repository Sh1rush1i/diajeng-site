import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Toast } from 'primeng/toast';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-landing-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    AutoCompleteModule,
    FloatLabelModule,
    DatePickerModule,
    Toast,
    FaIconComponent,
  ],
  templateUrl: './landing-form.html',
  styleUrl: './landing-form.css',
  providers: [MessageService],
})
export class LandingForm {
  selectedItem: any = {};
  isNextSequence: number = 0;

  constructor(
    private messageService: MessageService,
    private router: Router,
  ) {}

  nextSequence(): void {
    if (this.isNextSequence === 0 && !this.selectedItem.game) {
      this.messageService.add({
        severity: 'error',
        summary: 'Pilih dulu dong gamenya diajeng~',
        detail: `Diajeng pengen main yang mana > _ < ?`,
      });

      return;
    }

    this.isNextSequence++;
  }

  allItems = [
    { name: 'Minecraft', image: 'minecraft.webp' },
    { name: 'Where Winds Meet', image: 'wwm.webp' },
    { name: 'Stardew Valley', image: 'stardew.webp' },
    { name: 'The Sims 4', image: 'thesims4.webp' },
  ];

  selectGame(game: { name: string; image: string }) {
    this.selectedItem.game = game;
    console.log('Selected game:', this.selectedItem.game);
  }

  filteredItems: any[] = [];

  filterItems(event: any) {
    const query = event.query.toLowerCase();
    this.filteredItems = this.allItems.filter((item) => item.name.toLowerCase().includes(query));
  }

  testEvent() {
    console.log('Game yang dipilih:', this.selectedItem.game);
    console.log('Nama game:', this.selectedItem.name);
  }

  submitForm() {
    if (!this.selectedItem.game && !this.selectedItem.name) {
      this.messageService.add({
        severity: 'error',
        summary: 'Diisi semua dulu dong diajeng ~',
        detail: 'Harus diisi dong semua input fieldnya > _ <',
      });
      return;
    }

    const dataToSave = {
      dataMainDiajeng: this.selectedItem,
    };

    localStorage.setItem('selectedItems', JSON.stringify(dataToSave));

    this.router.navigate(['/ini-ya-jadwalnya']);
  }
}
