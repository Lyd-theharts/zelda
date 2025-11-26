import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {materials} from '../../../common/interfaceMaterials';
import {treasures} from '../../../common/interfaceTreasure';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-treasure-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './treasure-detail.html',
  styleUrl: './treasure-detail.css',
})
export class TreasureDetail  implements OnInit {
  @Input('id') id!: number;
  private readonly dataService: DataService = inject(DataService);
  treasureData = signal<treasures | null>(null);

  ngOnInit() {
    this.loadSingleTreasure(this.id);
  }

  private loadSingleTreasure(id: number) {
    this.dataService.getSingleTreasure(this.id).subscribe(
      {
        next: response => {
          this.treasureData.set(response.data);
          console.log(this.treasureData());
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
}
