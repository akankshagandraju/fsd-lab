"use strict";
function welcome(student) {
    return `Welcome, ${student}!`;
}
function getCollege(college = "SVECW") {
    return `College: ${college}`;
}
function sendEmail(email, subject) {
    console.log(`Sending email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}
function totalMarks(...marks) {
    return marks.reduce((sum, mark) => sum + mark, 0);
}
console.log(welcome("Akanksha"));
console.log(getCollege());
console.log(getCollege("bhimavaram"));
sendEmail("akanksha@gmail.com");
sendEmail("akanksha@gmail.com", "Lab Submission");
const total = totalMarks(85, 90, 88, 95);
console.log(`Total Marks: ${total}`);
