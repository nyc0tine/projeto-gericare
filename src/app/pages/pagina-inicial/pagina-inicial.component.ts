import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common'; // Importe NgClass

interface Evento {
  horario: string;
  titulo: string;
  custom?: boolean;
  concluida?: boolean; // Nova propriedade
}

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgClass], // Adicione NgClass aqui
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent {
  eventos: Evento[] = [
    { horario: '08:00', titulo: 'Acordar e Levantar' },
    { horario: '22:00', titulo: 'Desacelerar' }
  ];
  mostrarFormulario = false;
  novoHorario = '';
  novoTitulo = '';

  perfis = ['Dona Maria', 'Seu João'];
  perfilSelecionado = this.perfis[0];
  perfilImagem = 'https://i.pinimg.com/736x/43/96/1a/43961aa2c6f1c996997b5c804b7288e8.jpg';

  get eventosOrdenados() {
    return this.eventos.slice().sort((a, b) => a.horario.localeCompare(b.horario));
  }

  ngOnInit() {
    this.atualizarImagemPerfil();
  }

  atualizarImagemPerfil() {
    if (this.perfilSelecionado === 'Seu João') {
      this.perfilImagem = 'https://i.pinimg.com/736x/3d/34/5d/3d345d75a1bec2c67b9bc40931ca3fb9.jpg';
    } else {
      this.perfilImagem = 'https://i.pinimg.com/736x/43/96/1a/43961aa2c6f1c996997b5c804b7288e8.jpg';
    }
  }

  abrirFormulario() {
    this.mostrarFormulario = true;
    this.novoHorario = '';
    this.novoTitulo = '';
  }

  adicionarEvento() {
    if (this.novoHorario && this.novoTitulo) {
      this.eventos.push({ horario: this.novoHorario, titulo: this.novoTitulo, custom: true });
      this.mostrarFormulario = false;
    }
  }

  cancelar() {
    this.mostrarFormulario = false;
  }

  adicionarIdoso() {
    const nome = prompt('Nome do novo idoso:');
    if (nome) {
      this.perfis.push(nome);
      this.perfilSelecionado = nome;
      this.atualizarImagemPerfil();
    }
  }

  toggleConclusao(evento: Evento) {
    evento.concluida = !evento.concluida;
  }
}
