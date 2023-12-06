import { Component, ViewChild } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-semacucar',
  templateUrl: './semacucar.page.html',
  styleUrls: ['./semacucar.page.scss'],
})

export class SemacucarPage {
  @ViewChild(IonModal) modal: IonModal | undefined ;
  isFilterVisible = true;

  img_not_found: string = 'data:image/jpeg;base64,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';

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }
  
  isModalOpen = false;

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal?.dismiss('zsdzsdzs', 'confirm');
  }

  receita_selecionada: any;

  // receitas=[
  //   {src:'../../assets/polivalente.png', id:'1', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/3642030/pexels-photo-3642030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'2', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'3', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'4', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/1425174/pexels-photo-1425174.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  //   {src:'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1600', id:'5', nomerec:'exemplo', descricao:'  Ônibus 02 umas 12:55 Eu que agradeço Amém 🙏', restricoes: ['../assets/gluten.png','../assets/lactose.png', '../assets/açucar.png', '../assets/carboidrato.png']},
  // ]

  receitas: any = [];

  receita =
  { 
    descricao: null,
    entrada: null,
    ingredientes: [],
    lowCarb: null,
    mododefazer: [],
    nome: null,
    petisco: null,
    pratoP: null,
    semAcucar: null,
    src:null
  }

  fecharModal() {
    setTimeout(() => {
      this.modalController.dismiss({ dismissed: true });
    }, 50);
  
  }

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,
    private modalController: ModalController,
  ) {} 

  setOpen(isOpen: boolean, receita: any | null) {
    this.isModalOpen = isOpen;
    this.receita_selecionada = receita;
    localStorage.setItem('receita', JSON.stringify(receita))
  }

  onWillDismiss(event: Event) {
    this.isModalOpen = false;
  }

  ngOnInit() {
    this.listarReceitas();
  }

  listarReceitas() {
    this._crudService.fetchAll('receita')
      .then(receitas => {
        this.receitas = receitas;
        console.log(this.receitas)
      })
  }
}
