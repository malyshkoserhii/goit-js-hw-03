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
      return `Ваш рахунок поповнено на ${amount} грн. Баланс: ${this.balance}`;
    }
  },

  withdraw(amount) {
    if (amount > 0 && amount < this.balance) {
      console.log(`BALANCE:`, this.balance);
      this.createTransaction(amount, Transaction.WITHDRAW);
      this.balance -= amount;
      this.transactionID += 1;
      return `Ви зняли ${amount} грн. BALANCE: ${this.balance}`;
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
        const currentTransaction =  this.transactions[i];
        if (id === currentTransaction.id) {
            return currentTransaction;
        }
    }
      return `Транзакція з таким ID відсутня`;
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    //   for (let item of this.transactions) {
    //       console.log(item.type);
    //       let ammountOftype = 0;
    //       if(type === item.type) {
    //       }
    //   }
    const depositType = [];
    let totalDeposit = 0;
      for(let i = 0; i < this.transactions.length; i += 1) {
        //   const  values = Object.values(this.transactions[i]);
         if(this.transactions[i].type === 'deposit') {
             depositType.push(this.transactions[i].amount);
             for (const item of depositType) {
                 totalDeposit += item;
                 console.log('ITEM', item);
                //  return `TOTAAAAAAL: ${totalDeposit}`;
             }
         }
        // console.log(this.transactions[i].type);
          console.log(depositType);
        //   console.log("depositType", depositType.length);
          
          
        //   console.log(values);
        //   if(value === 'deposit') {
        //       console.log('Hello');
        //   }
      }
  },
};

console.log(account.transactions);
console.log(account.deposit(50));
console.log(account.deposit(10));
console.log(account.deposit(20));

console.log(account.withdraw(70));
console.log(account.withdraw(5));

// console.log('getBalance:', account.getBalance());

console.table(account.getTransactionDetails(1000002));

console.log('getTransactionTotal:--------', account.getTransactionTotal('deposit'));
