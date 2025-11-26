import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {monsters, monstersApi} from '../../../common/interfaceMonster';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {creatures} from '../../../common/interfaceCreatures';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-monsters',
  imports: [
    NgbPagination,
    RouterLink
  ],
  templateUrl: './monsters.html',
  styleUrl: './monsters.css',
})
export class Monsters implements OnInit {
  private dataService = inject(DataService);
  monsterList = signal<monsters[]>([]);
  displayedCards = signal<monsters[]>([]);
  page = 1;
  pageSize = 20;
  collectionSize = signal(0);

  ngOnInit() {
    this.loadMonsters();
  }

  private loadMonsters() {
    this.dataService.getMonsters().subscribe(
      {
        next: response => {
          this.monsterList.set(response.data);
          this.collectionSize.set(response.data.length);
          this.refreshCards();
          console.log(this.monsterList());
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('done');
        }
      }
    )
  }
  protected refreshCards() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const slicedCards = this.monsterList().slice(startIndex, endIndex);
    this.displayedCards.set(slicedCards);

    console.log('🔄 Actualizando cards:', {
      página: this.page,
      inicio: startIndex,
      fin: endIndex,
      cardsMostradas: slicedCards.length
    });
  }
}
