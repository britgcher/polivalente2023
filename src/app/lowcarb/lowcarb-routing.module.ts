import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowcarbPage } from './lowcarb.page';

const routes: Routes = [
  {
    path: '',
    component: LowcarbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LowcarbPageRoutingModule {}
