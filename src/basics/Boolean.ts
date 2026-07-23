
// 1. Comparison
let a = 10;
let b = 5;
console.log("a > b:", a > b);

//3. Multiple condition AND
let isLoggedIn = true;
let hasPermission = true;
let canAccess = isLoggedIn && hasPermission;
console.log("Can access system:", canAccess);


// 5. OR condition
let isAdmin = false;
let isSuperUser = true;
console.log("Access allowed:", isAdmin || isSuperUser);

//6.Ternary operator
let age = 17;
let result = age >= 18 ? "Adult" : "Minor";
console.log("User type:", result);

//7 Boolean from string
let input = "true";
let isTrue = input.toLowerCase() === "true";
console.log("Converted boolean:", isTrue);


// Falsy & truthy chec
let data: any = "";
if (!data) {
    console.log("Data is empty (falsy)");
}


// 8. Complex condition (real-world validation)
let userAge = 25;
let hasLicense = true;
let hasInsurance = false;

let canDrive = userAge >= 18 && hasLicense && hasInsurance;
console.log("Allowed to drive:", canDrive);

//-----npx ts-node src/day1/boolean.ts