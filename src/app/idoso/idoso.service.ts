import { Injectable } from '@angular/core';

export interface Remedio {
  nome: string;
  dosagem: string;
  horario: string;
}
export interface Idoso {
  id: number;
  nome: string;
  imagem: string;
  idade: number; // <-- Adicionado aqui
  tipoSanguineo: string;
  enfermidades: string[];
  remedios: { nome: string; dosagem: string; horario: string }[];
  situacoesComuns: string[];
  recomendacoes: string[];
  dataNascimento: string; // ou Date
}

@Injectable({ providedIn: 'root' })
export class IdosoService {
  private idosos: Idoso[] = [
    {
      id: 1,
      nome: 'João da Silva',
      imagem: 'assets/imagens/idoso1.jpg',
      idade: 84, // <-- Adicionado aqui
      tipoSanguineo: 'O+',
      enfermidades: ['Hipertensão', 'Diabetes'],
      remedios: [
        { nome: 'Losartana', dosagem: '50mg', horario: '08:00' },
        { nome: 'Metformina', dosagem: '500mg', horario: '12:00' }
      ],
      situacoesComuns: ['Quedas', 'Confusão ao entardecer'],
      recomendacoes: ['Evitar tapetes', 'Acompanhamento ao levantar'],
      dataNascimento: '1940-01-01'
    },
    {
      id: 2,
      nome: 'Maria Souza',
      imagem: 'assets/imagens/idoso2.jpg',
      idade: 74, // <-- Adicionado aqui
      tipoSanguineo: 'A-',
      enfermidades: ['Artrose'],
      remedios: [
        { nome: 'Paracetamol', dosagem: '750mg', horario: '09:00' }
      ],
      situacoesComuns: ['Dor nas articulações'],
      recomendacoes: ['Fisioterapia', 'Repouso'],
      dataNascimento: '1950-05-15'
    }
  ];

  getIdosos() {
    return this.idosos;
  }

  getIdoso(id: number) {
    return this.idosos.find(i => i.id === id);
  }

  updateIdoso(id: number, dados: Partial<Idoso>) {
    const idoso = this.getIdoso(id);
    const idx = this.idosos.indexOf(idoso as Idoso);
    if (idx > -1) {
      this.idosos[idx] = { ...this.idosos[idx], ...dados };
    }
  }
}