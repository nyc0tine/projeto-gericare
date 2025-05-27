import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(emailInput: HTMLInputElement, senhaInput: HTMLInputElement) {
    const email = emailInput.value;
    const senha = senhaInput.value;
    console.log('Email:', email);
    console.log('Senha:', senha);

    // Aqui você pode validar o login se quiser
    // Se login for bem-sucedido:
    this.router.navigate(['/tela-inicial']);
  }
}