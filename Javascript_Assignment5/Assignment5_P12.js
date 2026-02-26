class Wallet {
  #balance = 0;

  constructor(initialBalance = 0) {
    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    }
  }

  addMoney(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Added: $${amount}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  spendMoney(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient funds!");
    } else if (amount > 0) {
      this.#balance -= amount;
      console.log(`Spent: $${amount}`);
    }
  }

  getBalance() {
    return `Current Balance: $${this.#balance}`;
  }
}

const myWallet = new Wallet(100);

myWallet.addMoney(50);      
myWallet.spendMoney(30);    
console.log(myWallet.getBalance()); 
