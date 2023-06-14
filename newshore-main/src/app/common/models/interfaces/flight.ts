import { InterfaceTransport } from "src/app/common/models/interfaces/transport";


export interface InterfaceFlight<T> {
  Origin: string;
  Destination: string;
  Price: number;
  Transport: InterfaceTransport<T>;
}
