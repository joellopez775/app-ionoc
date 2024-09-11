import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-detecter',
  templateUrl: './detecter.page.html',
  styleUrls: ['./detecter.page.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideOutRight', [
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class DetecterPage {

  componente = {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/711px-Logo_DuocUC.svg.png"
  };

  showImage = true;
  animate = false; // Controlar la animación de la pelota

  constructor(private router: Router) {}

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onDocenteClick() {
    this.startAnimation(); // Iniciar animación
    setTimeout(() => {
      this.router.navigate(['/docente']); // Navegar a la página /docente
    }, 1000); // Tiempo de la animación
  }

  onAlumnoClick() {
    this.startAnimation(); // Iniciar animación
    setTimeout(() => {
      this.router.navigate(['/alumno']); // Navegar a la página /alumno
    }, 1000); // Tiempo de la animación
  }

  startAnimation() {
    this.animate = true;
    setTimeout(() => {
      this.animate = false;
    }, 1000); // Duración de la animación
  }
}