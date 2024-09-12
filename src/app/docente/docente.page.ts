import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
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
  componente = {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Logo_DuocUC.svg/711px-Logo_DuocUC.svg.png"
  };

  constructor(private navCtrl : NavController, private router: Router) { }

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
        this.navCtrl.navigateRoot('/docente');
      }

      this.loading = false; // Ocultar el componente de carga
    }, 1000); // Tiempo de simulación (1 segundo)
  }
  goBack() {
    this.router.navigate(['../detecter']); // Regresa a la página anterior
  }

}
