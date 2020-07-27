"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,

  transactionID: 1000000,

  transactions: [],

  createTransaction(amount, type) {
    if (amount > 0) {
      this.transactions.push({
        amount: amount,
        type: type,
        id: this.transactionID,
      });
    }
  },

  deposit(amount) {
    if (amount > 0) {
      this.createTransaction(amount, Transaction.DEPOSIT);
      this.balance += amount;
      this.transactionID += 1;
      return `Ваш рахунок поповнено на ${amount} грн. Ваш поточний баланс: ${this.balance}`;
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount < this.balance) {
      this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactionID += 1;
      return `Ви зняли ${amount} грн. Вам доступно: ${this.balance}`;
    }
    if (amount > this.balance) {
      return `Ви перевищили ліміт. Зняття готівки не можливо. BALANCE: ${this.balance}`;
    }
  },

  getBalance() {
    return `На вашому балансі: ${this.balance} грн.`;
  },

  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const currentTransaction = this.transactions[i];
      if (id === currentTransaction.id) {
        return currentTransaction;
      }
    }
    return `Транзакція з таким ID відсутня`;
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;

    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        transactionTotal += this.transactions[i].amount;
      }
    }
    return transactionTotal;
  },
};

console.log("deposit:", account.deposit(5000));
console.log("deposit:", account.deposit(1000));
console.log("deposit:", account.deposit(2000));

console.log("withdraw:", account.withdraw(700));
console.log("withdraw:", account.withdraw(50));
console.log("withdraw:", account.withdraw(450));

console.log("getBalance:", account.getBalance());

console.table(account.getTransactionDetails(1000002));
console.table(account.getTransactionDetails(1000005));

console.log(
  "getTransactionTotal (deposit):",
  account.getTransactionTotal("deposit")
);
console.log(
  "getTransactionTotal (withdraw):",
  account.getTransactionTotal("withdraw")
);
