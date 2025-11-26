import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Creatures} from './pages/categories/creatures/creatures';
import {Equipment} from './pages/categories/equipment/equipment';
import {Materials} from './pages/categories/materials/materials';
import {Monsters} from './pages/categories/monsters/monsters';
import {Treasure} from './pages/categories/treasure/treasure';
import {CreatureDetail} from './pages/details/creaturesDetail/creatureDetail';
import {EquipmentDetail} from './pages/details/equipment-detail/equipment-detail';
import {MaterialsDetail} from './pages/details/materials-detail/materials-detail';
import {MonsterDetail} from './pages/details/monster-detail/monster-detail';
import {TreasureDetail} from './pages/details/treasure-detail/treasure-detail';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'creatures',
    component: Creatures
  },
  {
    path: 'equipment',
    component: Equipment
  },
  {
    path: 'materials',
    component: Materials
  },
  {
    path: 'monsters',
    component: Monsters
  },
  {
    path: 'treasure',
    component: Treasure
  },
  {
    path: 'creaturesDetail/:id',
    component: CreatureDetail
  },
  {
    path: 'equipment-detail/:id',
    component: EquipmentDetail
  },
  {
    path: 'materials-detail/:id',
    component: MaterialsDetail
  },
  {
    path: 'monster-detail/:id',
    component: MonsterDetail
  },
  {
    path: 'treasure-detail/:id',
    component: TreasureDetail
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
