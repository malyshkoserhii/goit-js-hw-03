"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.table(user);

console.log("Додаємо нову властивість mood із значенням happy");
user.mood = "happy";
console.table(user);

console.log("Змінюємо властивість hobby");
user.hobby = "skydiving";
console.table(user);

console.log("Змінюємо статус premium");
user.premium = false;
console.table(user);

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

