import type {Customer} from "./customer";

export interface Order {
   readonly customer: Customer;
}
