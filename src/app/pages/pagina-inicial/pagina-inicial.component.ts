import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, NgClass } from '@angular/common'; // Importe NgClass
import { Router } from '@angular/router';

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

  hoje: number = new Date().getDate();
  diasDoMes: { dia: number, semana: string }[] = [];

  selectedEvento: Evento | null = null;

  constructor(private router: Router) {}

  get eventosOrdenados() {
    return this.eventos.slice().sort((a, b) => a.horario.localeCompare(b.horario));
  }

  ngOnInit() {
    this.atualizarImagemPerfil();
    this.gerarProximos7Dias();
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
    this.router.navigate(['/adicionar-idoso']);
  }

  toggleConclusao(evento: Evento) {
    evento.concluida = !evento.concluida;
  }

  gerarProximos7Dias() {
    const nomesSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
    const hoje = new Date();
    this.diasDoMes = [];
    for (let i = 0; i < 7; i++) {
      const data = new Date(hoje);
      data.setDate(hoje.getDate() + i);
      this.diasDoMes.push({
        dia: data.getDate(),
        semana: nomesSemana[data.getDay()]
      });
    }
    this.hoje = hoje.getDate();
  }

  abrirInfoIdoso() {
    this.router.navigate(['/info-idoso', this.perfilSelecionado]);
  }

  editarEvento(evento: Evento) {
    const novoTitulo = prompt('Editar título da tarefa:', evento.titulo);
    if (novoTitulo !== null && novoTitulo.trim() !== '') {
      evento.titulo = novoTitulo;
    }
  }

  excluirEvento(evento: Evento) {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      this.eventos = this.eventos.filter(e => e !== evento);
    }
  }

  selecionarEvento(evento: Evento) {
    this.selectedEvento = this.selectedEvento === evento ? null : evento;
  }
}
