// header.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { HeaderComponentRoutingModule } from './header-routing.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    HeaderComponentRoutingModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
