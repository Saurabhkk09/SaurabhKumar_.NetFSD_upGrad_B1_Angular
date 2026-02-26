class Payment {
    pay(amount) {
        throw new Error("Method 'pay()' must be implemented by subclass.");
    }
}

class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Processing Credit Card payment of $${amount}...`);
        console.log("Status:Encrypting data... Authorized.");
    }
}

class UPIPayment extends Payment {
    pay(amount) {
        console.log(`Processing UPI payment of $${amount}...`);
        console.log("Status:Request sent to mobile app... Success.");
    }
}

class CashPayment extends Payment {
    pay(amount) {
        console.log(`Processing Cash payment of $${amount}...`);
        console.log("Status:Handled by cashier. Change returned.");
    }
}

function checkout(paymentMethod, amount) {
    paymentMethod.pay(amount);
}

const myCC = new CreditCardPayment();
const myUPI = new UPIPayment();
const myCash = new CashPayment();

console.log("--- Checkout Start ---");
checkout(myCC, 120.99);
checkout(myUPI, 50.00);
checkout(myCash, 15.25);