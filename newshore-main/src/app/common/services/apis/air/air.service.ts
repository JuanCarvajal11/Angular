import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterfaceFlights } from 'src/app/common/models/interfaces/flights';

@Injectable({
  providedIn: 'root',
})
export class AirService<T> {

  constructor(private httpClient: HttpClient) {}

  getAirApi(): Observable<InterfaceFlights<T>[]> {
    return this.httpClient.get<InterfaceFlights<T>[]>(environment.airApiURL + '2');
  }

}
