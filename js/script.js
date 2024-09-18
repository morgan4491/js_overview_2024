// Arrays are not primitive value types
// They are reference types

const fruits = ['apple', 'orange', 'kiwi', 'grape'];
const data = ['Matt', 'Morgan', 33, '55 Coding Dr', '555-555-5555', ['pickleball', 'fishing']];

// you can put an array within an array (nested array)

// console.log(fruits); // will execute the array as a whole

// console.log(fruits[1]); // reference the index using the index number inside []

// console.log(fruits.length); // will execute the length of the array (above example would be 4)

// console.log(data);

// console.log(data[3]); // want address

// console.log(data[5][1]); // accessing a 'nested' array

console.log(fruits);

fruits[2] = 'strawberry';

console.log(fruits);

// increase the data age number by one - console log the original value and the new value after you increase it

console.log(data[2]);

data[2]++;

console.log(data[2]);

































// let fullName = 'Matt';

// console.log(fullName);

// fullName += ' Morgan';

// console.log(fullName);