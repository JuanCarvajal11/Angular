import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {

  constructor(private http: HttpClient) {}

  ejecutarConsulta() {
    return this.http.get("https://api.github.com/languages");
  }
}
