// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. Declaration   let x;
// 2. Assignment    x = 100;

let x;
// let x; -> name should be unique of every variable
let y;

x = 100; // no need to redeclare the variable again while assigning the value
         // the varable x will acts as 100 if we use it somewhere

console.log(x);

// datatypes

// numbers
let age = 22;      // number
let price = 10.99; // number
let gpa = 2.1;     // number

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`You got ${gpa} gpa`);

// checking the type of variable
console.log(typeof age);
console.log(typeof price);
console.log(typeof gpa);
// all are numbers

// strings
let firstName = "Rishabh";
let lastName = "Tyagi"
let email = 'rishi123@gmail.com' // string can be declared in single quotes and can contain numbers (but cannot perform maths on numbers in string)

console.log(`${firstName} => ${typeof firstName}`);
console.log(`${lastName} => ${typeof lastName}`);
console.log(`Your email is ${email}`);

// booleans (true/false)
let online = true;
let forSale = false;
let isEnrolled = true;
console.log(`${firstName} is online? => ${online}`);
console.log(`Car is for sale? => ${forSale}`);
console.log(`Is student enrollend? => ${isEnrolled}`);

// displaying variables on the webpage
document.getElementById("p1").innerText = firstName;
document.getElementById("p2").innerText = "Goyal";  // 3 ways as we can see
document.getElementById("p3").innerText = `${age}`;

// there are also some advance datatypes like array, object, etc.