import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemlactosePage } from './semlactose.page';

const routes: Routes = [
  {
    path: '',
    component: SemlactosePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemlactosePageRoutingModule {}
