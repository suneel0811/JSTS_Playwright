//1

interface Person {
    name: string;
    age: number;}

let user: Person = {
    name: "Suneel",
    age: 25
};

console.log(user);

//2 multiple fields

interface Student {
    name: string;
    marks: number;
    isPassed: boolean;
}

let student1: Student = {
    name: "Suneel",
    marks: 85,
    isPassed: true};
console.log(student1);

//3 func

interface Calculator {
    add(a: number, b: number): number;}
let calc: Calculator = {
    add(a, b) {
        return a + b;   }
};
console.log(calc.add(10, 5));