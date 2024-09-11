import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  loading:boolean=false;
  progress : number = 0;

  user={
    usuario:"",
    password:""
  };

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }
  validarUsuario() {
    this.loading = true; // Mostrar el componente de carga

    // Simular una carga, puedes ajustar el tiempo y el progreso según sea necesario
    setTimeout(() => {
      if (this.user.usuario === "docente" && this.user.password === "docente") {
        this.navCtrl.navigateForward('/generate', {
          queryParams: { username: this.user.usuario } // Pasar el nombre de usuario como parámetro de consulta
        });
        alert("Bienvenido");
      } else {
        alert("Error de login");
        this.navCtrl.navigateRoot('/login');
      }

      this.loading = false; // Ocultar el componente de carga
    }, 1000); // Tiempo de simulación (1 segundo)
  }
}
