 // Week 1 - Experiment 2
// Special Types: any, unknown, void

// any type
let course: any = "TypeScript";
console.log("Course:", course);

course = 2026;
console.log("Updated Course:", course);

course = false;
console.log("Boolean Value:", course);

// unknown type
let inputValue: unknown = "Full Stack Development";

if (typeof inputValue === "string") {
    console.log("String Length:", inputValue.length);
}

// void type
function displayAlert(message: string): void {
    console.log("Notification: " + message);
}

displayAlert("Experiment Completed Successfully");