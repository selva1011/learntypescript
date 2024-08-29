"use strict";
//Numbers Type Annotations for Variables
let age = 25;
let price = 99.99;
console.log(age, price);
//String Type Annotations for Variables
let firstName = "Selva";
let lastName = "Ganapathi";
let fullName = `${firstName} ${lastName}`;
console.log("your full name : ", fullName);
//bool Type Annotations for Variables
let isActive = true;
console.log(isActive);
//array Type Annotations for array
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
console.log(numbers, fruits);
//tuple
let person = ["selva", 18];
let point = [10, 20];
console.log(person, point);
//object Type Annotations for Objects
let human = {
    name: "Selva",
    age: 18,
    isEmployed: true,
};
console.log(human);
//any
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);
