import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {equipments} from '../../../common/interfaceEquipment';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-equipment-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './equipment-detail.html',
  styleUrl: './equipment-detail.css',
})
export class EquipmentDetail implements OnInit {
  @Input('id') id!: number;
  private readonly dataService: DataService = inject(DataService);
  equipmentData = signal<equipments | null>(null);

  ngOnInit() {
    this.loadSingleEquipment();
  }

  private loadSingleEquipment() {
    this.dataService.getSingleEquipment(this.id).subscribe(
      {
        next: response => {
          this.equipmentData.set(response.data);
          console.log(this.equipmentData());
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
