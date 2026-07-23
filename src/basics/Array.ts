// Create array
let numbers: number[] = [1, 2, 3];
console.log("Numbers:", numbers);


//2.dd element-push
numbers.push(4);
console.log("After push:", numbers);


//3.remove element-pop
numbers.pop();
console.log("After pop:", numbers);


//merge arrays-concat
let arr1: number[] = [1, 2];
let arr2: number[] = [3, 4];
let combined = arr1.concat(arr2);
console.log("Combined:", combined);


//5 spread operator
let spreadArr = [...arr1, ...arr2, 5];
console.log("Spread:", spreadArr);


//6.Map
let doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);


//Filter - conditional selection
let filtered = numbers.filter(n => n > 2);
console.log("Filtered (>2):", filtered);


//8 Reduce -aggregation like sum
let sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);


//9 Find -get first matching value
let found = numbers.find(n => n === 2);
console.log("Found:", found);


//10 compare arrays (deep comparison)
let a1: number[] = [1, 2];
let a2: number[] = [1, 2];

let areEqual = JSON.stringify(a1) === JSON.stringify(a2);
console.log("Are Equal:", areEqual);

//11.Sort array
let unsorted = [5, 2, 8, 1];
let sorted = unsorted.sort((a, b) => a - b);
console.log("Sorted:", sorted);

//12.Reverse array
console.log("Reversed:", [...numbers].reverse());

//---npx ts-node src/day2/Array.ts