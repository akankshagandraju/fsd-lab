"use strict";
class LibraryBook {
    title;
    author;
    price;
    available;
    constructor(title, author, price, available) {
        this.title = title;
        this.author = author;
        this.price = price ?? 500;
        this.available = available ?? true;
    }
    displayDetails() {
        console.log("----- Book Details -----");
        console.log(`Title      : ${this.title}`);
        console.log(`Author     : ${this.author}`);
        console.log(`Price      : ₹${this.price}`);
        console.log(`Available  : ${this.available ? "Yes" : "No"}`);
        console.log("------------------------");
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
}
const book1 = new LibraryBook("Wings of Fire", "A.P.J. Abdul Kalam");
const book2 = new LibraryBook("The Alchemist", "Paulo Coelho", 650, false);
book1.displayDetails();
book2.displayDetails();
book2.updatePrice(700);
console.log(`Updated Price of ${book2.title}: ₹${book2.price}`);
