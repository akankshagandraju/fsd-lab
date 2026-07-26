 import { Order } from "./OrderLogic.js";
import { Customer } from "./Customer.js";

const customer: Customer = {
    customerName: "Akanksha",
    age: 19,
    address: "Bhimavaram"
};

const order = new Order(customer, 1000, 101);

order.printBill();