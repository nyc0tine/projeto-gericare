import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class EsqueciSenhaComponent {
  email: string = '';

  constructor(private router: Router) {}

  recuperarSenha() {
    // lógica de envio do link de recuperação
    this.email = ''; // Limpa o campo de e-mail após envio
  }

  // Opcional: se quiser garantir navegação programática ao clicar no link
  voltarLogin() {
    this.router.navigate(['/login']);
  }
}