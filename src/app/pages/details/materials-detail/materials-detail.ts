import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {DataService} from '../../../services/data-service';
import {creatures} from '../../../common/interfaceCreatures';
import {materials} from '../../../common/interfaceMaterials';

@Component({
  selector: 'app-materials-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './materials-detail.html',
  styleUrl: './materials-detail.css',
})
export class MaterialsDetail implements OnInit {
  @Input('id') id!: number;
  private readonly router: Router = inject(Router);
  private readonly dataService: DataService = inject(DataService);
  materialData = signal<materials | null>(null);

  ngOnInit() {
    this.loadSingleMaterial(this.id);
  }

  private loadSingleMaterial(id: number) {
    this.dataService.getSingleMaterial(this.id).subscribe(
      {
        next: response => {
            this.materialData.set(response.data);
            console.log(this.materialData());
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
