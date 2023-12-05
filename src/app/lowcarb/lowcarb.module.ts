import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { IonicModule } from '@ionic/angular';
import { LowcarbPageRoutingModule } from './lowcarb-routing.module';
import { LowcarbPage } from './lowcarb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowcarbPageRoutingModule,
    HeaderModule,
  ],
  declarations: [LowcarbPage]
})
export class LowcarbPagePageModule {}

