let test = new Map();
test.set(1, 'aayush');
test.set(2, 'james');
test.set('jhon', 3);

console.log(test.keys());         // Returns an iterator
console.log(test.values());       // Returns an iterator
console.log(test.get(2));         // 'james'
console.log(test.entries());      // Returns an iterator

let arrayMap = [...test.entries()]; // Converts Map to an array
console.log(arrayMap);              // Prints the array of key-value pairs
console.log(arrayMap[1]);           // Prints the second key-value pair
console.log(...test);               // Spreads the key-value pairs


test.set(1,'Trivedi');
console.log(...test.entries())


//A Map in JavaScript is a collection of key-value pairs 
//Each key in a Map must be unique, but there's no limit to how many unique keys you can store.