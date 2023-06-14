import { Transport, InterfaceTransport } from 'src/app/common/models/classes/transport/transport';

export class Flight<T> {
	transport: Transport<T>;
  origin: string;
  destination: string;
  price: number;

  constructor(transport: InterfaceTransport<T>, origin: string, destination: string, price: number) {
    this.transport = new Transport<T>(transport);
    this.origin = origin;
    this.destination = destination;
    this.price = price;
  }
}
