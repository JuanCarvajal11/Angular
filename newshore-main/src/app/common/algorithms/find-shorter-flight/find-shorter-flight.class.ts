import { InterfaceFlights } from 'src/app/common/models/interfaces/flights';
import { InterfaceFlight } from 'src/app/common/models/interfaces/flight';
import { Journey } from 'src/app/common/models/classes/journey/journey';
import { FloydWarshall, Edge } from 'floyd-warshall-shortest';

export { Edge, Journey };

export class FindShorterFlight<T> extends FloydWarshall<string> {
  private _flightsInterface: InterfaceFlights<T>[] = [];
  private _flights: InterfaceFlight<T>[] = [];
  private _data: InterfaceFlights<T>[];
  private _price: number = 0;
  private _visiting: string[];
  private _currency:  number;

  constructor(data: InterfaceFlights<T>[], edges: Edge<string>[], visiting: string[], currency: number) {
    super(edges, false);
    this._data = data;
    this._visiting = visiting;
    this._currency = currency;
    this.mapShorterFlight(this.getShortestVisitingPath(visiting));
    this.mapPriceFlight();
    this.filterFlights();
  }

  public getJourneyFlight(): Journey<T> {
    return new Journey(this.getShorterFlight(), this._visiting[0], this._visiting[1], this.getPriceFlight())
  }

  public getShorterFlight(): InterfaceFlight<T>[] {
    return this._flights;
  }

  public getPriceFlight(): number {
    return this._price;
  }

  private mapShorterFlight(path: string[]): void {
    path.forEach(
      (_v, i) =>
        i !== path.length - 1 &&
        this._data.forEach(
          (v) => {
            if (v['departureStation'].includes(path[i]) && v['arrivalStation'].includes(path[i + 1])) {
              v['price'] = v['price']*this._currency;
              this._flightsInterface.push(v)
            }
          }
        )
    );
  }

  private mapPriceFlight(): void {
    this._flightsInterface.forEach(v => this._price += v.price)
  }

  private filterFlights(): void {
    this._flightsInterface.forEach((v) => {
      this._flights.push({
        Origin: v.departureStation,
        Destination: v.arrivalStation,
        Price: v.price,
        Transport: {flightCarrier: v.flightCarrier, flightNumber: v.flightNumber}
      });
    })
  }
}
