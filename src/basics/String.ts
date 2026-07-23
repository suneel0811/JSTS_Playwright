//1: Concatenation
let firstName: string = "Suneel";
let lastName: string = "Kumar";
let fullName: string = firstName + " " + lastName;
console.log("Full Name:", fullName);


//2: literals
let city: string = "Hyderabad";
console.log(`I am ${fullName} from ${city}`);


//3 Length
let password: string = "test123";
console.log("Valid password length:", password.length >= 6);


//4: Case-insensitive
let email1: string = "test@gmail.com";
let email2: string = "TEST@gmail.com";
console.log("Emails match:", email1.toLowerCase() === email2.toLowerCase());


//5: Trimming
let userInput: string = "   hello world   ";
console.log("Trimmed:", userInput.trim());


//6: Replace values
let text: string = "I love Java";
let updatedText = text.replace("Java", "TypeScript");
console.log(updatedText);


//7: Split string into array
let sentence: string = "This is TypeScript";
let words: string[] = sentence.split(" ");
console.log(words);


//8: Check substring
let message: string = "Welcome to TypeScript course";
console.log("Contains 'TypeScript':", message.includes("TypeScript"));


// 9: Extract substring
let data: string = "Order#12345";
let orderId = data.substring(6);
console.log("Order ID:", orderId);


// Example 10: StartsWith / EndsWith
let fileName: string = "report.pdf";
console.log("Is PDF:", fileName.endsWith(".pdf"));
console.log("Starts with 'rep':", fileName.startsWith("rep"));


//---npx ts-node src/day1/string.ts