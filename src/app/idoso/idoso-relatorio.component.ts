import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdosoService, Idoso } from './idoso.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-idoso-relatorio',
  standalone: true,
  templateUrl: './idoso-relatorio.component.html',
  styleUrls: ['./idoso-relatorio.component.css'],
  imports: [NgIf, NgFor]
})
export class IdosoRelatorioComponent implements OnInit {
  idoso?: Idoso;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private idosoService: IdosoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idoso = this.idosoService.getIdoso(id);
  }

  editar() {
    if (this.idoso) {
      this.router.navigate(['/idoso', this.idoso.id, 'editar']);
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }

  calcularIdade(dataNascimento: string | Date): number {
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
}

