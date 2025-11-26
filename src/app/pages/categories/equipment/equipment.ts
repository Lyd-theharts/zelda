import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {equipments} from '../../../common/interfaceEquipment';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {creatures} from '../../../common/interfaceCreatures';

@Component({
  selector: 'app-equipment',
  imports: [
    RouterLink,
    NgbPagination
  ],
  templateUrl: './equipment.html',
  styleUrl: './equipment.css',
})
export class Equipment implements OnInit {
  private dataService = inject(DataService);
  equipmentList = signal<equipments[]>([]);
  displayedCards = signal<equipments[]>([]); // Signal para las cards mostradas
  page = 1;
  pageSize = 20;
  collectionSize = signal(0);


  ngOnInit() {
    this.loadEquipmentList();
  }

  constructor() {

  }

  private loadEquipmentList() {
    this.dataService.getEquipments().subscribe(
      {
        next: response => {
          this.equipmentList.set(response.data);
          this.collectionSize.set(response.data.length);
          this.refreshCards();
          console.log(this.equipmentList());
          console.log('Equipment data loaded:', response.data.length, 'items');



        },
        error: error => {
          console.error(error);
        },
        complete: () => {
          console.log("complete");
        }
      }
    )
  }
  protected refreshCards() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    const slicedCards = this.equipmentList().slice(startIndex, endIndex);
    this.displayedCards.set(slicedCards);

    console.log('🔄 Actualizando cards:', {
      página: this.page,
      inicio: startIndex,
      fin: endIndex,
      cardsMostradas: slicedCards.length
    });
  }
}
