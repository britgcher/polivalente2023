import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HomePageRoutingModule } from '../home/home-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, HomePageRoutingModule]
})
export class HeaderComponentRoutingModule {}
