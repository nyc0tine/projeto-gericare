import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdosoService, Idoso } from './idoso.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-idoso-editar',
  standalone: true,
  templateUrl: './idoso-editar.component.html',
  styleUrls: ['./idoso-editar.component.css'],
  imports: [FormsModule, NgIf]
})
export class IdosoEditarComponent implements OnInit {
  idoso?: Idoso;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private idosoService: IdosoService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const original = this.idosoService.getIdoso(id);
    if (original) {
      this.idoso = { ...original, 
        enfermidades: [...original.enfermidades], 
        remedios: original.remedios.map(r => ({...r})), 
        situacoesComuns: [...original.situacoesComuns], 
        recomendacoes: [...original.recomendacoes] 
      };
    }
  }

  onEnfermidadesChange(valor: string) {
    if (this.idoso) {
      this.idoso.enfermidades = valor.split(',').map(e => e.trim());
    }
  }

  salvar() {
    if (this.idoso) {
      this.idosoService.updateIdoso(this.idoso.id, this.idoso);
      this.router.navigate(['/idoso', this.idoso.id]);
    }
  }

  descartar() {
    if (this.idoso) {
      this.router.navigate(['/idoso', this.idoso.id]);
    }
  }
}

