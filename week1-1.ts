let studentName: string = "Akanksha";
let studentAge: number = 19;
let isPresent: boolean = true;

console.log("Student Name Data Type: " + typeof studentName);
console.log("Student Age Data Type: " + typeof studentAge);
console.log("Attendance Data Type: " + typeof isPresent);

function displayStudent(name: string, age: number, present: boolean): void {
    console.log("\nStudent Details");
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Present: " + (present ? "Yes" : "No"));
}

displayStudent(studentName, studentAge, isPresent);