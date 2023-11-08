// alert('Hello World');
console.log('Hello World');
console.log(123);
console.log(true);
console.error('This is an error');
console.warn('This is a warning');

// var, let, const
// Try not to use var anymore (old way of declaring variables) - use let and const instead
// because var is globally scoped and can be redeclared and reassigned  - let and const are block scoped
// let can be reassigned but not redeclared
// const cannot be reassigned or redeclared

// let age1 = 30;
age1 = 31;
console.log(age1);

// Const -> value can't be changed
// Let -> value can be changed

// String, Numbers, Boolean, null, undefined, Symbol
// ignore Symbols for now

// Semi-colons are optional in JS but it's best practice to use them

const namee = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null; // null is an empty value
const y = undefined; // undefined is a variable that has not been assigned a value
let z; // undefined

console.log(typeof namee); // string
console.log(typeof age); // number
console.log(typeof rating); // number
console.log(typeof isCool); // boolean
console.log(typeof x); // object
console.log(typeof y); // undefined
console.log(typeof z); // undefined

console.log("My name is" + namee + "and I am " + age); // old way of concatenating strings
console.log(`My name is ${namee} and I am ${age}`); // new way of concatenating strings

// string properties and methods
// .length, .toUpperCase(), .toLowerCase(), .substring(), .split(), .includes()

// Arrays
const numbers = new Array(1,2,3,4,5); // old way of creating arrays
console.log(numbers);
const number2 = [1,2,3,4,5]; // new way of creating arrays
console.log(number2);
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
fruits[3] = 'grapes';
console.log(fruits);
fruits.push('mangoes'); // add to end....push is js = append in python
console.log(fruits);
fruits.unshift('strawberries'); // add to beginning
console.log(fruits);
fruits.pop(); // remove last element
console.log(fruits); 
fruits.pop(2); // removes the last element...2 is ignored
console.log(fruits);
console.log(Array.isArray(fruits)); // check if array
console.log(fruits.indexOf('oranges')); // check index of element


// Object literals : key value pairs (like dictionaries in python)
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'], // array inside object
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]); // access array inside object
console.log(person.address.city); // access object inside object

// Destructuring : pull variables out of an object
const { firstName, lastName, address: { city } } = person; // pull out firstName, lastName, city from person object
console.log(firstName);
console.log(city);

// To pull out an array element from an object literal,
const { hobbies } = person;
console.log(hobbies);

// Add properties to object
person.email = 'email@email.com';
console.log(person);

// For loop
for(let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}

// While loop
let i = 0;
while(i<10) {
    console.log(`While loop number: ${i}`);
    i++
}

todos = [
    {
        id:1,
        text:"123",
        isCompleted:true
    },
    {
        id:2,
        text:"456",
        isCompleted:true
    },
    {
        id:3,
        text:"789",
        isCompleted:false
    }
]

for(let todo of todos) {
    console.log(todo.text);
}

// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
})

const todoText = todos.map(function(todo) {
    return todo.text;
})
console.log(todoText);

const todoFilter = todos.filter(function(todo) {
    return todo.isCompleted === true;
})
console.log(todoFilter);

const todoFilter2 = todos.filter(function(todo) {
    return todo.isCompleted === false;
}).map(function(todo) {
    return todo.text;
})
console.log(todoFilter2);

// Conditionals
const x1 = '10';
if(x1 === 10) {
    console.log('x is 10');
} // Returns x is 10
// == checks only value
if(x1 === 10) {
    console.log('x is 10');
} // Returns x is 10
// === checks value and type

//  || = or
//  && = and

// Ternary operator
const x2 = 10;
const color = x2 > 10 ? 'red' : 'blue';
// if x2>10 -> Red, else -> blue
// console.log(color);

// Switches
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('Color is neither red not blue');
        break;
}

function addNums(num1=1, num2=1){
    return(num1 + num2);
}

console.log(addNums(5,5));

// Arrow functions
const addNums2 = (num1=1, num2=1) => {
    return(num1 + num2);
}
console.log(addNums2(5,5));

// Arrow functions
const addNums3 = (num1=1, num2=1) => num1 + num2;
console.log(addNums3(5,5));

// Arrow functions
const addNums4 = num1 => num1 + 5;
console.log(addNums4(5));

// Arrow functions
todos.forEach((todo) => console.log(todo));