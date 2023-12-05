import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { IonicModule } from '@ionic/angular';
import { SemglutenPageRoutingModule } from './semgluten-routing.module';
import { SemglutenPage } from './semgluten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemglutenPageRoutingModule,
    HeaderModule
  ],
  declarations: [SemglutenPage]
})
export class SemglutenPageModule {}
