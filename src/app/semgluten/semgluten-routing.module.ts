import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemglutenPage } from './semgluten.page';

const routes: Routes = [
  {
    path: '',
    component: SemglutenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemglutenPageRoutingModule {}
