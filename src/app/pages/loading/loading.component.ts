import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  standalone: true,
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    setTimeout(() => {
      const container = this.el.nativeElement.querySelector('.loading-container');
      this.renderer.addClass(container, 'slide-up');
      setTimeout(() => {
        this.router.navigate(['/pagina-inicial']);
      }, 600); // tempo da animação
    }, 2000);
  }
}
