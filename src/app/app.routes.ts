import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component'; // Importe o componente
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { AdicionarIdosoComponent } from './pages/adicionar-idoso/adicionar-idoso.component'; // ajuste o caminho conforme seu projeto
import { InfoIdosoComponent } from './pages/info-idoso/info-idoso.component'; // ajuste o caminho se necessário
import { IdosoListaComponent } from './idoso/idoso-lista.component';
import { IdosoRelatorioComponent } from './idoso/idoso-relatorio.component';
import { IdosoEditarComponent } from './idoso/idoso-editar.component';


export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'pagina-inicial', component: PaginaInicialComponent, pathMatch: 'full' },
  { path: 'adicionar-idoso', component: AdicionarIdosoComponent },
  { path: 'info-idoso/:nome', component: InfoIdosoComponent },
  { path: 'idoso-lista', component: IdosoListaComponent },
  { path: 'idoso/:id', component: IdosoRelatorioComponent },
  { path: 'idoso/:id/editar', component: IdosoEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

