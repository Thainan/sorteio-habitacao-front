import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaPessoaComponent } from '../../src/app/lista-pessoas/lista-pessoas.component';

const routes: Routes = [
  { path: 'sorteio', component: ListaPessoaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
