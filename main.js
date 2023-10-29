class Wallet {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const myAccount = new Wallet("Bank", 100);

myAccount.deposit(50);
myAccount.withdraw(25);
console.log(myAccount.getBalance());
