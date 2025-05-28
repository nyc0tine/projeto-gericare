import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private router: Router) {}

  login() {
    this.mensagemErro = '';
    if (!this.email || !this.senha) {
      this.mensagemErro = 'Por favor, preencha o e-mail e a senha.';
      return;
    }

    // Verifica usuário temporário do cadastro
    const usuarioTemp = localStorage.getItem('usuarioTemp');
    if (usuarioTemp) {
      const usuario = JSON.parse(usuarioTemp);
      if (this.email === usuario.email && this.senha === usuario.senha) {
        localStorage.removeItem('usuarioTemp'); // Permite acesso só uma vez
        this.router.navigate(['/loading']);
        return;
      }
    }

    // Usuário fixo do sistema
    if (this.email === 'responsavel@gericare.com' && this.senha === '1234') {
      this.router.navigate(['/loading']);
    } else {
      this.mensagemErro = 'E-mail ou senha inválidos ou usuário inexistente!';
    }
  }
}