import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {creatureApi, creatures, creatureSingleApi} from '../common/interfaceCreatures';
import {equipmentApi, equipmentSingleApi} from '../common/interfaceEquipment';
import {materialsApi, materialSigleApi} from '../common/interfaceMaterials';
import {monstersApi, monsterSingleApi} from '../common/interfaceMonster';
import {treasureApi, treasureSingleApi} from '../common/interfaceTreasure';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';
  private readonly baseURLdetail = 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/';


  getCreatures(): Observable<creatureApi>{
    return this.http.get<creatureApi>(this.baseURL + 'creatures');
  }
  getSingleCreature(id: number): Observable<creatureSingleApi>{
    return this.http.get<creatureSingleApi>(this.baseURLdetail  + id);
  }
  getEquipments(): Observable<equipmentApi>{
    return this.http.get<equipmentApi>(this.baseURL + 'equipment');
  }
  getSingleEquipment(id: number): Observable<equipmentSingleApi>{
    return this.http.get<equipmentSingleApi>(this.baseURLdetail + id);
  }
  getMaterials(): Observable<materialsApi>{
    return this.http.get<materialsApi>(this.baseURL + 'materials');
  }
  getSingleMaterial(id: number): Observable<materialSigleApi>{
    return this.http.get<materialSigleApi>(this.baseURLdetail + id);
  }
  getMonsters(): Observable<monstersApi>{
    return this.http.get<monstersApi>(this.baseURL + 'monsters');
  }
  getSingleMonster(id: number): Observable<monsterSingleApi>{
    return this.http.get<monsterSingleApi>(this.baseURLdetail + id);
  }
  getTreasures(): Observable<treasureApi>{
    return this.http.get<treasureApi>(this.baseURL + 'treasure');
  }
  getSingleTreasure(id: number): Observable<treasureSingleApi>{
    return this.http.get<treasureSingleApi>(this.baseURLdetail + id);
  }

}
