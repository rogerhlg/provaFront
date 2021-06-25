import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/pessoa/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/pessoa/listar/listar.component';

const routes: Routes = [
  {
    path: 'pessoa/listar',
    component: ListarComponent
  },
  {
    path: '',
    component: ListarComponent
  }
  ,
  {
    path: 'pessoa/cadastrar',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
