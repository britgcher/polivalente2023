import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReceitaPage } from './receita/receita.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'semacucar',
    loadChildren: () => import('./semacucar/semacucar.module').then( m => m.SemacucarPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'semlactose',
    loadChildren: () => import('./semlactose/semlactose.module').then( m => m.SemlactosePageModule)
  },
  {
    path: 'lowcarb',
    loadChildren: () => import('./lowcarb/lowcarb.module').then( m => m.LowcarbPagePageModule)
  },
  {
    path: 'semgluten',
    loadChildren: () => import('./semgluten/semgluten.module').then( m => m.SemglutenPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
