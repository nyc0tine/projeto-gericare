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

  constructor(private router: Router) {}

  login() {
    if (this.email === 'administrador@gericare.com' && this.senha === '1234') {
      this.router.navigate(['/loading']);
    } else {
      alert('E-mail ou senha inválidos!');
    }
  }
}