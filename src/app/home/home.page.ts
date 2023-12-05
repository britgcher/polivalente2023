import { Component, ViewChild } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { IonModal } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('slideDownUp', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate('2s ease-out')
      ]),
      transition('* => void', [
        animate('2s ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class HomePage {
@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
})

 //variaveis
 filtrosAtivos = false;
 opcoesSelecionadas: any = {};
 receita_selecionada: any;
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
   sobremesa:null
 }


//receitas

setOpen(isOpen: boolean, receita: any | null) {
  this.isModalOpen = isOpen;
  this.receita_selecionada = receita;
}

closeModalAndNavigate() {
  setTimeout(() => {
    this.isModalOpen = false;
    this.router.navigate(['/receita']);
  }, 500);

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




toggleFilter() {
  this.isFilterVisible = !this.isFilterVisible;
}


  @ViewChild(IonModal) modal: IonModal | undefined ;
  isFilterVisible = true;

  img_not_found: string = 'data:image/jpeg;base64,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';
  isModalOpen = false;

  cancel() {
    this.modal?.dismiss(null, 'cancel');
    this.filtrosAtivos = true;
  }

  confirm() {
    this.modal?.dismiss('zsdzsdzs', 'confirm');
    this.filtrosAtivos = false;
    this.opcoesSelecionadas = {};
  }

 

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,
    private navCtrl: NavController,
    private router: Router,
  ) {} 

 

  
    // Adicione outras condições de filtro conforme necessário
  
   
  
  
  

//   isLoading: boolean = false;

//   alunos = [];

//   nome = 'Joaozinho';

//   aluno = {
//     nome: null,
//     idade: null,
//     ra: null,
//     id: null
//   }

//   public file: any = {};

//   constructor(
//     public _authenticate: AuthenticateService,
//     private _crudService: CrudService,
//     public storage: Storage,
//     private _message: MessageService
//   ) { }

//   criarConta(dados: any){
//     this._authenticate.register(dados.email, dados.password)
//   }

//   realizarLogin(dados: any) {
//     this._authenticate.login(dados.email, dados.password);
//   }

//   inserirAluno(dados: any){
//     this.aluno.nome = dados.nome;
//     // this.aluno.idade = 10;
//     // this.aluno.ra = 321321;

//     this._crudService.insert(this.aluno, 'alunos');
//   }

//   listarAlunos(){
//     this._crudService.fetchAll('alunos')
//     .then( alunos => {
//       this.alunos = alunos;
//     })
//   }


//   removerAluno(aluno: any){
//     console.log(aluno);
//     this._crudService.remove(aluno.id, 'alunos')
//   }

//   consultarAluno(dados: any){
//     console.log(dados);
//     this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
//     .then( aluno => {
//       console.log(aluno[0].id);
//     })
//   }

//   atualizarDadosAluno(dados: any){
//     if (this.aluno.id == null) {
//       this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'alunos')
//       .then( aluno => {
//         this.aluno = aluno[0];
//         console.log(this.aluno);
//       })
//     } else {
//       this._crudService.update(this.aluno.id, dados, 'alunos');
//     }
//   }

//   memorizarArquivo(event: any) {
//     this.file = event.target.files[0];
//   }

//   fazerUpload() {
//     if (!this.file.name) {
//       this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
//       return;
//     }

//     // Upload file and metadata to the object 'images/mountains.jpg'
//       const storageRef = ref(this.storage, this.file.name);
//       const uploadTask = uploadBytesResumable(storageRef, this.file);

//       // Listen for state changes, errors, and completion of the upload.
//       uploadTask.on('state_changed',
//         (snapshot) => {
//           // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//           const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//           console.log('Upload is ' + progress + '% done');

//           switch (snapshot.state) {
//             case 'paused':
//               console.log('Envio pausado');
//               break;
//             case 'running':
//               console.log('Carregando arquivo');
//               this._message.show('Carregando arquivo, favor aguardar!', 2000);
//               break;
//           }
//         },
//         (error) => {
//           // A full list of error codes is available at
//           // https://firebase.google.com/docs/storage/web/handle-errors
//           switch (error.code) {
//             case 'storage/unauthorized':
//               // User doesn't have permission to access the object
//               console.log('Não enviado! Usuário sem permissão');
//               this._message.show('Não enviado! Usuário sem permissão!');
//               break;
//             case 'storage/canceled':
//               // User canceled the upload
//               console.log('Não enviado: upload cancelado');
//               this._message.show('Erro: Upload cancelado!');
//               break;
//             case 'storage/unknown':
//               // Unknown error occurred, inspect error.serverResponse
//               console.log('Não enviado. Ocorreu um erro desconhecido!');
//               this._message.show('Oops! Ocorreu um erro desconhecido!');
//               break;
//           }

//           console.log('Arquivo enviado');
//           this._message.show('Arquivo enviado com sucesso!');
//         },
//         () => {
//           // Upload completed successfully, now we can get the download URL
//           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//             console.log('Url do arquivo é ' + downloadURL)
//           });
//         }
//       );
//   }

}

