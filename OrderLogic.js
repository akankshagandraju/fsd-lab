import { DELIVERY_CHARGE, GST_RATE } from "./Constants.js";
export class Order {
    customer;
    foodPrice;
    orderId;
    constructor(customer, foodPrice, orderId) {
        this.customer = customer;
        this.foodPrice = foodPrice;
        this.orderId = orderId;
    }
    calculateBill() {
        const gst = this.foodPrice * GST_RATE;
        return this.foodPrice + gst + DELIVERY_CHARGE;
    }
    printBill() {
        console.log("------ Food Order ------");
        console.log(`Customer: ${this.customer.customerName}`);
        console.log(`Age: ${this.customer.age}`);
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Final Bill: ₹${this.calculateBill()}`);
        console.log("------------------------");
    }
}
