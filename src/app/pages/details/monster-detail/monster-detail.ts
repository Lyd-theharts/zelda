import {Component, inject, Input, OnInit, signal} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {DataService} from '../../../services/data-service';
import {monsters} from '../../../common/interfaceMonster';

@Component({
  selector: 'app-monster-detail',
  imports: [
    RouterLink
  ],
  templateUrl: './monster-detail.html',
  styleUrl: './monster-detail.css',
})
export class MonsterDetail implements OnInit {
  @Input('id') id!: number;
  private readonly router: Router = inject(Router);
  private readonly dataService: DataService = inject(DataService);

  monsterData = signal<monsters | null>(null);

  ngOnInit() {
    this.loadSingleMonster(this.id);
  }

  private loadSingleMonster(id: number) {
    this.dataService.getSingleMonster(this.id).subscribe(
      {
        next: response => {
          this.monsterData.set(response.data);
          console.log(this.monsterData());
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
