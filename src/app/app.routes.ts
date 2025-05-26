import { Routes } from '@angular/router';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component'; // Importe o componente
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
  { path: '', component: PaginaInicialComponent, pathMatch: 'full' }
  
];
