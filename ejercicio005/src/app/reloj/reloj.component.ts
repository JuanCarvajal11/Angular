import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  segundo=0;
  minuto=0;
  hora=0;
  @Input() second:number=0;
  @Input() minute:number=0;
  @Input() hour:number=0;
  @Output() multiplo10 = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    this.segundo = this.second;
    this.minuto = this.minute;
    this.hora = this.hour;
    setInterval(() => {
      this.segundo++;
      if(this.segundo % 1 == 0){
          this.multiplo10.emit({
            hora: this.hora,
            minuto: this.minuto,
            segundo: this.segundo
          });
      }
      if(this.segundo == 60){
        this.minuto++;
        this.segundo=0;
      }
      if(this.minuto == 60 ){
        this.hora++;
        this.minuto=0;
      }
      if(this.hora == 25){
        this.hora = 0;
      }
    },1000)

  }

}
