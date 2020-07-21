"use strict";

const countTotalSalary = function (employees) {
  const salary = Object.values(employees);
  let totalSalary = 0;
  for (let sum of salary) {
    totalSalary += sum;
  }
  return `Загальна сума усіх зарплат: ${totalSalary}`;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
);
