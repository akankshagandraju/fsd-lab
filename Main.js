import { Order } from "./OrderLogic.js";
const customer = {
    customerName: "Akanksha",
    age: 19,
    address: "Bhimavaram"
};
const order = new Order(customer, 1000, 101);
order.printBill();
