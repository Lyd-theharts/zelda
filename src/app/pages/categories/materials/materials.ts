import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../../../services/data-service';
import {materials} from '../../../common/interfaceMaterials';
import {NgbPagination} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-materials',
  imports: [
    NgbPagination,
    RouterLink
  ],
  templateUrl: './materials.html',
  styleUrl: './materials.css',
})
export class Materials implements OnInit {
  private dataService = inject(DataService);
  materialsList = signal<materials[]>([]);

  ngOnInit() {
    this.loadMaterials();
  }

  private loadMaterials() {
    this.dataService.getMaterials().subscribe(
      {
        next: response => {
          this.materialsList.set(response.data);
          console.log(this.materialsList());
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
