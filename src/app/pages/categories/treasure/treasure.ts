import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {treasures} from '../../../common/interfaceTreasure';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-treasure',
  imports: [
    RouterLink
  ],
  templateUrl: './treasure.html',
  styleUrl: './treasure.css',
})
export class Treasure implements OnInit {
  private dataService = inject(DataService);
  treasureList = signal<treasures[]>([]);

  ngOnInit() {
    this.loadtreasures();
  }

  private loadtreasures() {
    this.dataService.getTreasures().subscribe(
      {
        next: response => {
          this.treasureList.set(response.data);
          console.log(this.treasureList());
        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log('complete');
        }
      }
    )
  }
}
