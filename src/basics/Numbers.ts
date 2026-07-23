//1 arth
let result = (10 + 5) * 2 / 3;
console.log("Chained result:", result);


// 2. Modulus
console.log("Is even:", 10 % 2 === 0);

// 3. Increment
let count = 5;
count++;
console.log("After increment:", count);

// 4. Max and Min
console.log(Math.max(10, 20, 30));
console.log(Math.min(10, 5, 1));

// 5. Random number generation
let random = Math.floor(Math.random() * 100);
console.log("Random:", random);


// 6. Parsing string to number
let strValue: string = "100";
let parsed = parseInt(strValue);
console.log("Parsed:", parsed + 10);

// 7. NaN checking
let invalid = Number("abc");
console.log("Is NaN:", isNaN(invalid));


//---npx ts-node src/day1/numbers.ts