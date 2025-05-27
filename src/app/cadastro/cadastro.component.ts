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

    if (this.nome && this.email && this.senha) {
      this.usuarios.push({
        nome: this.nome,
        email: this.email,
        senha: this.senha
      });
      alert('Cadastro realizado com sucesso!');

      this.nome = '';
      this.email = '';
      this.senha = '';
    } else {
      alert('Preencha todos os campos!');

    }




    // Aqui você incluiria lógica de envio para API ou serviço
    console.log('Cadastro realizado com sucesso:', this.nome, this.email);
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);
  }
}