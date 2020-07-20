"use strict"

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

console.table(user);

console.log('Додаємо нову валстивість mood із значенням happy');
user.mood = 'happy';
console.table(user);

console.log('Змінюємо властивість hobby');
user.hobby = 'skydiving';
console.table(user);

console.log('Змінюємо статус premium');
user.premium = false;
console.table(user);

const entries = Object.entries(user);
console.log(entries);

for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`);
}

