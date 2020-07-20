"use strict"

const countProps = function (countProps) {
    const keys = Object.keys(countProps);
    
    return `Кількість властивостей в об'єкті: ${keys.length}`;
}


console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));