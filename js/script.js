const notes = ['JS is cool', 'create a constant with const', 'use the src attribute on the script tag to load a js file'];

console.log(notes);


notes.push('Copilot is a great help!'); // 'push' adds a new item to te end of the array

console.log(notes);

notes.unshift('CSS is crazy'); // 'unshift' adds an item to the beginning of the array

console.log(notes);

notes.pop(); //'pop' removes the last item in the array

console.log(notes);

notes.shift(); // 'shift' removes the first item in the array

console.log(notes);



const notes2 = notes;

notes2.splice(1, 1); // 'splice' removes an item at a certain index - pass in the index of where you want to start deleting items and then the amount of items you want to delete

console.log(notes2);
