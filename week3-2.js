"use strict";
class StudentAccount {
    studentName;
    balance;
    pin;
    rewardPoints = 0;
    constructor(name, amount, pin) {
        this.studentName = name;
        this.balance = amount;
        this.pin = pin;
    }
    payFee(amount, enteredPin) {
        if (this.checkPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} fee paid successfully.`);
                console.log(`Remaining Balance: ₹${this.balance}`);
            }
            else {
                console.log("Insufficient Balance");
            }
        }
        else {
            console.log("Invalid PIN");
        }
    }
    checkPin(enteredPin) {
        return this.pin === enteredPin;
    }
}
class PremiumStudent extends StudentAccount {
    addReward() {
        this.rewardPoints += 50;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}
const student = new StudentAccount("Akanksha", 8000, 1234);
console.log(`Student: ${student.studentName}`);
student.payFee(3000, 1234);
const premium = new PremiumStudent("Rahul", 12000, 5678);
premium.addReward();
