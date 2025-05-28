import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  notificacoesAtivas = true;

  constructor(private router: Router) {}

  alternarNotificacoes() {
    this.notificacoesAtivas = !this.notificacoesAtivas;
  }

  irParaListaIdosos() {
    this.router.navigate(['/idoso-lista']);
  }
}
