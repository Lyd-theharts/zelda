import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../../services/data-service';
import { creatures } from '../../../common/interfaceCreatures';
import { RouterLink } from '@angular/router';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-creatures',
  imports: [RouterLink, NgbPagination],
  templateUrl: './creatures.html',
  styleUrl: './creatures.css'
})
export class Creatures implements OnInit {
  private dataService = inject(DataService);
  creaturesList = signal<creatures[]>([]);
  displayedCards = signal<creatures[]>([]); // Signal para las cards mostradas
  page = 1;
  pageSize = 20;
  collectionSize = signal(0);

  ngOnInit() {
    this.loadCreatures();

  }

  protected loadCreatures() {
    this.dataService.getCreatures().subscribe({
      next: response => {
        this.creaturesList.set(response.data);
        this.collectionSize.set(response.data.length);
        this.refreshCards();
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('done');
      }
    });
  }
  protected refreshCards() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const slicedCards = this.creaturesList().slice(startIndex, endIndex);
    this.displayedCards.set(slicedCards);
  }
 /* onPageChange(newPage: number) {
    this.page.set(newPage);
    this.refreshCards(); // Actualizar las cards cuando cambia la página
  }*/
}
