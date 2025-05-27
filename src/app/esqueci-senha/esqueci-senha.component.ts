import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.css'
})
export class EsqueciSenhaComponent {
  email: string = '';

  constructor(private router: Router) {}

  recuperarSenha() {
    // Aqui você incluiria lógica de envio para API ou serviço de recuperação
    console.log('Link de recuperação enviado para:', this.email);
    alert('Se o e-mail estiver cadastrado, enviaremos um link para redefinir sua senha.');
    this.router.navigate(['/login']);
  }
}
