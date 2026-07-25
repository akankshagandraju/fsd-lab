"use strict";
class CollegeLibrary {
    static libraryName = "SVECW Library";
    static totalBooks = 0;
    bookId;
    bookTitle;
    constructor(title, id) {
        this.bookTitle = title;
        this.bookId = id;
        CollegeLibrary.totalBooks++;
    }
    static libraryInfo() {
        console.log(`Welcome to ${this.libraryName}`);
    }
    showBook() {
        console.log(`Book Title : ${this.bookTitle}`);
        console.log(`Book ID    : ${this.bookId}`);
    }
}
console.log(CollegeLibrary.libraryName);
CollegeLibrary.libraryInfo();
const book1 = new CollegeLibrary("Python Programming", "LIB101");
const book2 = new CollegeLibrary("Data Structures", "LIB102");
book1.showBook();
book2.showBook();
console.log(book1.bookId);
console.log(`Total Books : ${CollegeLibrary.totalBooks}`);
