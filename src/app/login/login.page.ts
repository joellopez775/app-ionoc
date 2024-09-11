import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Propiedades para el estado de carga
  loading: boolean = false;
  progress: number = 0;

  user = {
    usuario: "",
    password: ""
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  validarUsuario() {
    this.loading = true; // Mostrar el componente de carga

    // Simular una carga, puedes ajustar el tiempo y el progreso según sea necesario
    setTimeout(() => {
      if (this.user.usuario === "joel" && this.user.password === "7398") {
        this.navCtrl.navigateForward('/home', {
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