"use strict";
var College;
(function (College) {
    const minMarks = 35;
    function isPass(mark) {
        return mark >= minMarks;
    }
    College.isPass = isPass;
    function isValidRoll(roll) {
        const pattern = /^[A-Z]{2}[0-9]{3}$/;
        return pattern.test(roll.toUpperCase());
    }
    College.isValidRoll = isValidRoll;
    let Result;
    (function (Result) {
        function calculatePercentage(total, subjects) {
            return total / subjects;
        }
        Result.calculatePercentage = calculatePercentage;
    })(Result = College.Result || (College.Result = {}));
})(College || (College = {}));
const rollNo = "CS101";
const marks = 78;
console.log(`Roll Number Valid: ${College.isValidRoll(rollNo)}`);
console.log(`Student Passed: ${College.isPass(marks)}`);
const totalMarks = 450;
const percentage = College.Result.calculatePercentage(totalMarks, 5);
console.log(`Percentage: ${percentage}%`);
