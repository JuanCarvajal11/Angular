import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulos',
  templateUrl: './triangulos.component.html',
  styleUrls: ['./triangulos.component.css']
})
export class TriangulosComponent{
  colors: string[] = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Black",
    "White",
    "Cyan",
    "Magenta",
    "Lime",
    "Teal",
    "Indigo",
    "Aqua",
    "Gold",
    "Silver",
    "Navy",
    "Maroon",
    "Olive",
    "Violet",
    "Turquoise",
    "Plum",
    "Salmon",
    "Coral"
  ];
  backgroundColor: string = "Yellow";
  backgroundColor2: string = "Blue";
  backgroundColor3: string = "Red";
  intervalId: any;
  selectedColors: string[] = [];
  valor: number =1;
  valor2: number =1;
  valor3: number =1;

  ngOnInit() {
    this.selectRandomColor();
  }

  selectRandomColor() {
    this.intervalId = setInterval(() => {
      this.selectedColors = [];
      for (let i = 0; i < 31; i++) {
        const randomIndex = Math.floor(Math.random() * this.colors.length);
        const randomColor = this.colors[randomIndex];
        this.selectedColors.push(randomColor);
      }
      this.valor = Math.trunc(Math.random() * 9) + 1;
      this.valor2 = Math.trunc(Math.random() * 9) + 1;
      this.valor3 = Math.trunc(Math.random() * 9) + 1;
      this.backgroundColor=this.selectedColors[0];
      this.backgroundColor2=this.selectedColors[1];
      this.backgroundColor3=this.selectedColors[2];
  }, 1000);
  }


}

