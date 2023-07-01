import { Component } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent {

  constructor(){

  }

  public data: Object[] = [{
    "Customer Name": "Romona Heaslip",
    "Model": "Taurus",
    "Color": "Aquamarine",
    "Payment Mode": "Debit Card",
    "Date": "07/11/2015",
    "Sales Value": "8529.22"
  },
  {
    "Customer Name": "Clare Batterton",
    "Model": "Sparrow",
    "Color": "Pink",
    "Payment Mode": "Cash on delivery",
    "Date": "7/13/2016",
    "Sales Value": "17866.19"
  }];
}
