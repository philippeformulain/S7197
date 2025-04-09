import type {Order} from "./order";

export interface Customer {
   readonly orders: Array<Order>;
}
