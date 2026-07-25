"use strict";
function calculateDiscount(price, discount) {
    return price - (price * discount);
}
const calculateDiscountArrow = (price, discount) => {
    return price - (price * discount);
};
const greetCustomer = (name) => `Welcome, ${name}! Enjoy Shopping.`;
const itemPrice = 2000;
const discountRate = 0.10;
console.log(greetCustomer("Akanksha"));
const finalPrice1 = calculateDiscount(itemPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);
const finalPrice2 = calculateDiscountArrow(itemPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);
