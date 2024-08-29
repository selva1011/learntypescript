let human3: { name: string; age: number; isEmployed: boolean } = {
    name: "John",
    age: 30,
    isEmployed: true
};

console.log(human3);



let human2: { name: string; age: number; isEmployed?: boolean } = {
    name: "Alice",
    age: 25
};

console.log(human2);


let ratings: { [key: string]: number } = {
    "John": 9,
    "Alice": 8,
    "Bob": 10
};

console.log(ratings);


ratings["Charlie"] = 7;
console.log(ratings);

