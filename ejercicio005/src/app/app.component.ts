import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensaje = '';

  actualizar(evento: any){
    const { hora, minuto, segundo } = evento;
    this.mensaje = 'Hora Actual : '+ hora + ':' + minuto + ':' + segundo;
  }
}
