import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent implements OnInit {
  characters: any;
  page :number = 1;
  url="https://rickandmortyapi.com/api/character?page="+ this.page;

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get(this.url)
    .subscribe(
      ( res:any )=> {
        const {info , results} = res
        this.characters  = results
      }
    );
  }

  aumentar(){
    this.page++;
    this.updateUrl();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  disminuir(){
    this.page--;
    this.updateUrl();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  updateUrl() {
    this.url="https://rickandmortyapi.com/api/character?page="+ this.page;
    this.http.get(this.url)
    .subscribe(
      ( res:any )=> {
        const {info , results} = res
        this.characters  = results
      }
    );
  }

}
