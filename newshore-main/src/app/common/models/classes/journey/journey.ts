import { Flight } from 'src/app/common/models/classes/flight/flight';
import { InterfaceFlight } from 'src/app/common/models/interfaces/flight';

export class Journey<T> {
	flights: Flight<T>[];
  origin: string;
  destination: string;
  price: number;

  constructor(flights: InterfaceFlight<T>[], origin: string, destination: string, price: number) {
    this.flights =  flights.map(v => (new Flight(v.Transport, v.Origin, v.Destination, v.Price)));
    this.origin = origin;
    this.destination = destination;
    this.price = price;
  }
}
