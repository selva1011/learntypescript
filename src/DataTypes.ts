//Numbers Type Annotations for Variables

let age: number = 25;
let price: number = 99.99;

console.log(age, price);

//String Type Annotations for Variables

let firstName: string = "Selva";
let lastName: string = "Ganapathi";
let fullName: string = `${firstName} ${lastName}`;

console.log("your full name : ", fullName);

//bool Type Annotations for Variables

let isActive: boolean = true;

console.log(isActive);

//array Type Annotations for array

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];

console.log(numbers, fruits);

//tuple

let person: [string, number] = ["selva", 18];
let point: [number, number] = [10, 20];

console.log(person, point);

//object Type Annotations for Objects

let human: { name: string; age: number; isEmployed: boolean } = {
  name: "Selva",
  age: 18,
  isEmployed: true,
};

console.log(human)


//any

let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;

console.log(randomValue);
