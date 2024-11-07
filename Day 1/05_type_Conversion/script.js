// type conversion = change the datatype of a value to another 
//                   (string, number, boolean)
//                   ex. number to string, number to boolean etc

// let age = window.prompt(`How old are you?`); // it accepts input as string
// console.log(age, typeof age); // o/p 25 string
// age = Number(age);
// age +=1;25
// console.log(age, typeof age); // o/p 26 number

// let x = "pizza" // NaN number
// let y = "pizza" // pizza string
// let z = "pizza" // true boolean

let x = 1;
let y = 1;
let z = 1;

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); 
console.log(y, typeof y); 
console.log(z, typeof z); 

