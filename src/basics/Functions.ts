//1.normal fun

function greet() {
    console.log("Hello TypeScript");
}

greet();

//2. Param function
function greetUser(name: string) {
    console.log("Hello", name);
}

greetUser("Suneel");

//3.Fun return

function add(a: number, b: number): number {
    return a + b;
}
let result = add(10, 5);
console.log("Sum:", result);

//4. default param

function greetWithDefault(name: string = "Guest") {
    console.log("Welcome", name);
}

greetWithDefault();          // Guest
greetWithDefault("Suneel");  // Suneel


//5. Fun with array
function sumArray(numbers: number[]): number {
        return numbers.reduce((acc, val) => acc + val, 0);
    }

    console.log("Array Sum:", sumArray([10, 20, 30]));

//6 condition logic

function checkEligibility(age: number, hasLicense: boolean): string {
    if (age >= 18 && hasLicense) {
        return "Eligible to drive";
    }
    return "Not eligible";
}

console.log(checkEligibility(20, true));
console.log(checkEligibility(16, false));

//7, even & odd

function isEven(num: number): boolean {
    return num % 2 === 0;
}

console.log(isEven(10)); // true
console.log(isEven(7));  // false

