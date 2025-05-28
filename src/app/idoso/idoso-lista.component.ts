import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdosoService } from './idoso.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-idoso-lista',
  standalone: true,
  templateUrl: './idoso-lista.component.html',
  styleUrls: ['./idoso-lista.component.css'],
  imports: [NgFor]
})
export class IdosoListaComponent {
  idosos: any[];

  constructor(private idosoService: IdosoService, private router: Router) {
    this.idosos = this.idosoService.getIdosos();
  }

  verRelatorio(idosoId: number) {
    this.router.navigate(['/idoso', idosoId]);
  }

}