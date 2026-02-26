class BankAccount {
    constructor(accountHolder, initialBalance = 0) {
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
        console.log(`Success: Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Denied: Insufficient funds. Current balance: $${this.balance}`);
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
        } else {
            this.balance -= amount;
            console.log(`Success: Withdrew $${amount}. Remaining balance: $${this.balance}`);
        }
    }

    checkBalance() {
        console.log("--- Account Status ---");
        console.log(`Holder: ${this.accountHolder}`);
        console.log(`Balance: $${this.balance}`);
        console.log("----------------------");
    }
}