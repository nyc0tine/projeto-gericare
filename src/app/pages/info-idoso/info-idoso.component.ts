import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-idoso',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info-idoso-container">
      <h2>Informações de {{ nome }}</h2>
      <ng-container [ngSwitch]="nome">
        <div *ngSwitchCase="'Dona Maria'">
          <p>Idade: {{ calcularIdade('1947-05-10') }} anos</p>
          <p>Condições: Hipertensão</p>
        </div>
        <div *ngSwitchCase="'Seu João'">
          <p>Idade: {{ calcularIdade('1943-11-22') }} anos</p>
          <p>Condições: Diabetes</p>
        </div>
        <div *ngSwitchDefault>
          <p>Informações não cadastradas.</p>
        </div>
      </ng-container>
    </div>
  `,
  styles: [`
    .info-idoso-container {
      padding: 24px;
    }
  `]
})
export class InfoIdosoComponent {
  nome: string = '';

  constructor(private route: ActivatedRoute) {
    this.nome = this.route.snapshot.paramMap.get('nome') || '';
  }

  calcularIdade(dataNascimento: string): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const m = hoje.getMonth() - nascimento.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
}
