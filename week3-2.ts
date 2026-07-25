 class StudentAccount {
    public studentName: string;
    private balance: number;
    private pin: number;
    protected rewardPoints: number = 0;

    constructor(name: string, amount: number, pin: number) {
        this.studentName = name;
        this.balance = amount;
        this.pin = pin;
    }

    public payFee(amount: number, enteredPin: number): void {
        if (this.checkPin(enteredPin)) {
            if (this.balance >= amount) {
                this.balance -= amount;
                console.log(`₹${amount} fee paid successfully.`);
                console.log(`Remaining Balance: ₹${this.balance}`);
            } else {
                console.log("Insufficient Balance");
            }
        } else {
            console.log("Invalid PIN");
        }
    }

    private checkPin(enteredPin: number): boolean {
        return this.pin === enteredPin;
    }
}

class PremiumStudent extends StudentAccount {
    public addReward(): void {
        this.rewardPoints += 50;
        console.log(`Reward Points: ${this.rewardPoints}`);
    }
}

const student = new StudentAccount("Akanksha", 8000, 1234);

console.log(`Student: ${student.studentName}`);

student.payFee(3000, 1234);

const premium = new PremiumStudent("Rahul", 12000, 5678);
premium.addReward();