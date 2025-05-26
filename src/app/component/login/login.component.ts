import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login(emailInput: HTMLInputElement, senhaInput: HTMLInputElement) {
    const email = emailInput.value;
    const senha = senhaInput.value;
    console.log('Email:', email);
    console.log('Senha:', senha);
  }
}
