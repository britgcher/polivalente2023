import { Component, ViewChild, Input } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PerfilPage{
  @NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule],
  })

  selected: any='curti'
  
  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,
  ) {} 
  
    handleCurtirClick() {
      this.selected='curti'
  
    }
  
    handleFavoritoClick() {
      this.selected='favos'
    }
    
  }
