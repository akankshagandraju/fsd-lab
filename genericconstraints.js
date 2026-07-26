"use strict";
function displayProduct(item) {
    console.log(`Product Name: ${item.productName}`);
}
const laptop = {
    productName: "Dell Inspiron",
    price: 65000
};
const mobile = {
    productName: "Samsung Galaxy",
    price: 30000
};
displayProduct(laptop);
displayProduct(mobile);
function getArrayLength(data) {
    return data.length;
}
console.log("String Length:", getArrayLength("Full Stack"));
console.log("Array Length:", getArrayLength([10, 20, 30, 40]));
