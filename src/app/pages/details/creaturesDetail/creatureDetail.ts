import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {creatures} from '../../../common/interfaceCreatures';
import {Router, RouterLink} from '@angular/router';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-creaturesDetail',
  imports: [
    RouterLink,

  ],
  templateUrl: './creatureDetail.html',
  styleUrl: './creatureDetail.css',
})
export class CreatureDetail implements OnInit{
  @Input('id') id!: number;
  private readonly router: Router = inject(Router);
  private readonly dataService: DataService = inject(DataService);

  creatureData = signal<creatures | null>(null); // <- USA SIGNAL

  ngOnInit() {
    this.loadCreatureDetail();
  }

  private loadCreatureDetail() {
    this.dataService.getSingleCreature(this.id).subscribe(
      {
        next: response => {
          console.log('Cargando detalle para ID:', this.id);
          this.creatureData.set(response.data); // <- USA SET
          console.log(this.creatureData());
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
