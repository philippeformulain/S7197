import { Customer } from './customer.js';
import { Product } from './product.js';

export class Order {
    constructor() {
        this.customer = new Customer();
        this.products = [];
    }
}
