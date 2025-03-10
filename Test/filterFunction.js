let temp = [];  // Initialize an empty array

// Loop from 0 to 10 and add each number to the array
for (let i = 0; i <= 10; i++) {
    temp.push(i);
}

console.log(temp);  // Print the full array [0, 1, 2, ..., 10]

// Filter out only even numbers (divisible by 2)
console.log(temp.filter(x => x % 2 === 0));  
// Output: [0, 2, 4, 6, 8, 10]

console.log(temp.reduce((sum,x)=>sum+x,0))
temp.push(-1);
console.log(temp.reduce((max,x)=>Math.max(max,x),-Infinity))
console.log(Math.max(...temp))
console.log(Math.min(...temp))
console.log(temp.reduce((min,x)=>Math.min(min,x),Infinity))
console.log(temp.reduce(x=>xtest+x/temp.length,0))