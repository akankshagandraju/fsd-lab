 namespace College {

    const minMarks = 35;

    export function isPass(mark: number): boolean {
        return mark >= minMarks;
    }

    export function isValidRoll(roll: string): boolean {
        const pattern = /^[A-Z]{2}[0-9]{3}$/;
        return pattern.test(roll.toUpperCase());
    }

    export namespace Result {
        export function calculatePercentage(total: number, subjects: number): number {
            return total / subjects;
        }
    }
}

const rollNo = "CS101";
const marks = 78;

console.log(`Roll Number Valid: ${College.isValidRoll(rollNo)}`);
console.log(`Student Passed: ${College.isPass(marks)}`);

const totalMarks = 450;
const percentage = College.Result.calculatePercentage(totalMarks, 5);

console.log(`Percentage: ${percentage}%`);