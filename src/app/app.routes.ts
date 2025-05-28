import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component'; // Importe o componente
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AdicionarIdosoComponent } from './pages/adicionar-idoso/adicionar-idoso.component'; // ajuste o caminho conforme seu projeto
import { InfoIdosoComponent } from './pages/info-idoso/info-idoso.component'; // ajuste o caminho se necessário

export const routes: Routes = [
  //{ path: '', component: LoginComponent },
  //{ path: 'loading', component: LoadingComponent },
  { path: '', component: PaginaInicialComponent, pathMatch: 'full' },
  { path: 'adicionar-idoso', component: AdicionarIdosoComponent },
  { path: 'info-idoso/:nome', component: InfoIdosoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }