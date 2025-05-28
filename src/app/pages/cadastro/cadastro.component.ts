import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private router: Router) {}

  cadastrar() {
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Salva temporariamente o usuário no localStorage
    localStorage.setItem('usuarioTemp', JSON.stringify({
      email: this.email,
      senha: this.senha
    }));

    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    this.router.navigate(['/login']);
  }
}