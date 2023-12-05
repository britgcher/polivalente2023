import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';

import { IonicModule } from '@ionic/angular';

import { SemlactosePageRoutingModule } from './semlactose-routing.module';

import { SemlactosePage } from './semlactose.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemlactosePageRoutingModule,
    HeaderModule
  ],
  declarations: [SemlactosePage]
})
export class SemlactosePageModule {}
