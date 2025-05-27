import { Routes } from '@angular/router';
// Importação dos componentes (ajuste o caminho se necessário)
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona a raiz para login
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent }
];
