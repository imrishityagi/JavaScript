// arithmetic operators -> operands (values, variables, etc.)
//                      -> operators (+ - * /)
//                      -> ex. x = a + b;

let students = 30;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 2; // reminder is 0

// augumented assignment operator
students += 1; /* also */ students++; // known as increment operator
students -= 1; /* also */ students--; // knons as decrement operator
// same for other operators like *=, /=
let count = 20;
count *= 2;
count /= 2;
count **= 2;
count %=3;

console.log(students);
console.log(count);

// operator precedence
// 1. parenthesis ()
// 2. exponents **
// 3. mul & div & modulo
// 4. addition and substraction

/* note if having same operator precedence then it will solve from left to right */