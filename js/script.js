// Arrays are not primitive value types
// They are reference types

const fruits = ['apple', 'orange', 'kiwi', 'grape', 'banana', 'blueberry', 'strawberry', 'plantain'];
const data = ['Matt', 'Morgan', 33, '55 Coding Dr', '555-555-5555', ['pickleball', 'fishing']];

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

const fullName = 'Matt Morgan';

for (let index = 0; index < fullName.length; index++) {
    console.log(fullName[index]);
}


// arrays are indexed by item
// strings are indexed by character


// fruits.length --> gives you the exact # of items in the 'fruits' array
// *REMEMBER* arrays start at an index# of 0

// can use 'i' instead of 'index' --> see below
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let count = 0; count < 11; count++) {
//     console.log(count);
// }

// *Loops have to finish before continuing onto the next line of code
