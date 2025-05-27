import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'; // Importe o HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // Adicione o HeaderComponent aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-gericare';

  constructor(private router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/cadastro'; 
  }
}
