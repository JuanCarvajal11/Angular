import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Operaciones Basicas';

  num1:number = 10;
  num2:number = 2;

  contador = 1;
 incrementar(){
  this.contador++
 }
 decrementar(){
  this.contador--
 }

 nombre:string = "";
 apellido:string = "";

}
