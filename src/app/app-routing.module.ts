import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdicionarComponent} from '../app/adicionar/adicionar.component';
import { HomeComponent } from '../app/home/home.component'
import {EditarNotaComponent} from '../app/editar-nota/editar-nota.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'adicionar',component:AdicionarComponent},
  {path: 'editar/:titulo', component:EditarNotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
