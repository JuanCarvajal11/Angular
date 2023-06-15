import { InterfaceTransport } from 'src/app/common/models/interfaces/transport';
export { InterfaceTransport }

export class Transport<T> {
  flightCarrier: string;
	flightNumber: string;

	constructor(interfaceTransport: InterfaceTransport<T>) {
    this.flightCarrier = interfaceTransport.flightCarrier;
    this.flightNumber = interfaceTransport.flightNumber;
  }
}
