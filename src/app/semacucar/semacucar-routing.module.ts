import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemacucarPage } from './semacucar.page';

const routes: Routes = [
  {
    path: '',
    component: SemacucarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemacucarPageRoutingModule {}
