import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './perfil.page';
import { HeaderModule } from '../header/header.module';
import { PerfilPageRoutingModule } from './perfil-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPage,
    PerfilPageRoutingModule,
    HeaderModule,
  ]
})
export class PerfilPageModule {}

