 class CollegeLibrary {

    public static readonly libraryName: string = "SVECW Library";
    public static totalBooks: number = 0;

    public readonly bookId: string;
    public bookTitle: string;

    constructor(title: string, id: string) {
        this.bookTitle = title;
        this.bookId = id;

        CollegeLibrary.totalBooks++;
    }

    public static libraryInfo(): void {
        console.log(`Welcome to ${this.libraryName}`);
    }

    public showBook(): void {
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