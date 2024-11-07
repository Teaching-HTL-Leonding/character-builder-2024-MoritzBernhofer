import {Routes} from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';

export const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: ''},
  {path: 'builder', component: CharacterBuilderComponent}
];
