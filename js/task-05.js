"use strict";

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const property = [];

  const values = Object.values(products);

  for (let i = 0; i < values.length; i += 1) {
    if (prop === "name") {
      property.push(values[i].name);
    }
    if (prop === "price") {
      property.push(values[i].price);
    }
    if (prop === "quantity") {
      property.push(values[i].quantity);
    }
  }

  /* Те ж саме тільки через цикл for лише щоб попрактикуватися */

  // for (let product of arr) {
  //   if (prop === "name") {
  //     property.push(product[prop]);
  //   }
  //   if (prop === "price") {
  //     property.push(product[prop]);
  //   }
  //   if (prop === "quantity") {
  //     property.push(product[prop]);
  //   }
  // }

  return property;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));
