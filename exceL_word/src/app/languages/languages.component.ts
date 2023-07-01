import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../languages.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  language :any;

  constructor(private languagesService: LanguagesService) {
  }

  ngOnInit() {
    this.languagesService.ejecutarConsulta()
    .subscribe( result =>  this.language = result)
  }

}
