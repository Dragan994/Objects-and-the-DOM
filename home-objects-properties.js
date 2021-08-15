let mySymbol = Symbol();


let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: "secretInformation"
};

console.log(person.name);       // John

console.log(person.age);        // 32

console.log(person.partTime);   // false

//person.age = 34;

person['age'] = 44

showMessage(person.age);

console.log(person)