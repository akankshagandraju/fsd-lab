function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount);
}

const calculateDiscountArrow = (price: number, discount: number): number => {
    return price - (price * discount);
};

const greetCustomer = (name: string): string =>
    `Welcome, ${name}! Enjoy Shopping.`;

const itemPrice: number = 2000;
const discountRate: number = 0.10; 

console.log(greetCustomer("Akanksha"));

const finalPrice1 = calculateDiscount(itemPrice, discountRate);
console.log(`Final Price (Traditional): ₹${finalPrice1}`);

const finalPrice2 = calculateDiscountArrow(itemPrice, discountRate);
console.log(`Final Price (Arrow): ₹${finalPrice2}`);