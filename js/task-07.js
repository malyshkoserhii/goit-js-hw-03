"use strict";

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  
  transactionID: 1,

  transactions: [],

  createTransaction(amount, type) {
  if(amount > 0){
      this.transactions.push({
        amount: amount,
        type: type,
        id: this.transactionID,
      });
    }
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    if (amount > 0) {
      this.createTransaction(amount, Transaction.DEPOSIT);
      this.balance += amount;
      this.transactionID += 1;
      return `Ваш рахунок поповнено на ${amount} грн. Баланс: ${this.balance}`;
    }
  },
   /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if(amount > 0 && amount < this.balance) {
      console.log(`BALANCE:`, this.balance);
      this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactionID += 1;
      return `Ви зняли ${amount} грн. BALANCE: ${this.balance}`;
    }
    if(amount > this.balance) {
      return `Ви перевищили ліміт. Зняття готівки не можливо. BALANCE: ${this.balance}`;
    }
  },
  getBalance() {
    return `На вашому балансі: ${this.balance} грн.`;
  },
};

console.log(account.transactions);
console.log(account.deposit(50));
console.log(account.deposit(10));
console.log(account.deposit(20));

console.log(account.withdraw(70));
console.log(account.withdraw(5));

console.log('getBalance:', account.getBalance());