import { Routes } from '@angular/router';
import { IdosoListaComponent } from './idoso/idoso-lista.component';
import { IdosoRelatorioComponent } from './idoso/idoso-relatorio.component';
import { IdosoEditarComponent } from './idoso/idoso-editar.component';

export const routes: Routes = [
  { path: '', component: IdosoListaComponent },
  { path: 'idoso/:id', component: IdosoRelatorioComponent },
  { path: 'idoso/:id/editar', component: IdosoEditarComponent }
];
