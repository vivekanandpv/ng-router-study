import { Component, inject, signal } from '@angular/core';
import { DataService } from '../data.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dataService = inject(DataService);

  saved = signal(false);

  isSaved() {
    return this.saved();
  }

  save() {
    this.saved.update((_) => true);
  }
}
