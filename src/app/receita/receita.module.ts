import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaPageRoutingModule } from './receita-routing.module';
import { HeaderModule } from '../header/header.module';
import { AuthModule } from '@angular/fire/auth';

import { ReceitaPage } from './receita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaPageRoutingModule,
    HeaderModule,
    AuthModule
  ],
  declarations: [ReceitaPage]
})
export class ReceitaPageModule {}

