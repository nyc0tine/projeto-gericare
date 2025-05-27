import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component'; // Importe o componente
import { LoginComponent } from './pages/login/login.component';
import { LoadingComponent } from './pages/loading/loading.component';


export const routes: Routes = [
  //{ path: '', component: LoginComponent },
  //{ path: 'loading', component: LoadingComponent },
  { path: '', component: PaginaInicialComponent, pathMatch: 'full' },
];
