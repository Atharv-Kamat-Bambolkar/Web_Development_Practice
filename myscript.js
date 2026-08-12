// Primitive Data Types
// let a = 10; // number
// let b = "Hello"; // string
// let c = true; // boolean
// let d = null; // null
// let e = undefined; // undefined
// let f = Symbol("id"); // symbol
// let g = 10n; // bigint

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// Non-Primitive Data Types / Reference Data Types
// let h = { name: "John", age: 30}; // object
// let i = [1, 2, 3]; // array
// let j = new Date(); // date

// console.log(h);
// console.log(i);
// console.log(j);

// let person1 = {
//     name: "Amaan"
// };
// let person2 = person1;
// person2.name = "Shubham";
// console.log(person1.name); 

// console.log(typeof 10); // number
// console.log(typeof "Hello"); // string

// Type Conversion
// let x = "10";
// let y = Number(x);
// console.log(y);
// console.log(typeof y);

// Type Coercion
// let a = "10";
// let b = 5;
// let c = a + b;
// console.log(c);
// console.log(typeof c);

// let name = "Amaan";
// console.log(name);

// let str = "hello";
// str[0] = "S";
// console.log(str); // hello

// let str = "hello";
// str = "S" + str.slice(1);
// console.log(str); // Sello

// let name = "Dilip";
// let age = 22;
// console.log(`My name is " + name + " and I am " + age + " years old.`); // same line
// console.log(`My name is ${name} and I am ${age} years old.`); // My name is Dilip and I am 22 years old.

// let str = "World";
// let message = `Hello, ${str}`;
// console.log(message); // Hello, World

// let text = `JavaScript.`;
// console.log(text.slice(0, 4)); // Java

// split() method splits a string into an array of substrings and returns a new array.
// let str = "Hello, World!";
// let arr = str.split(", ");
// console.log(arr); // [ 'Hello', 'World!' ]

// trim() method removes whitespace from both ends of a string.
// let str = "   Hello, World!   ";
// let trimmedStr = str.trim();
// console.log(trimmedStr); // Hello, World!

// replace() method replaces a specified value with another value in a string.
// let str1 = "Hello, World!";
// let newStr = str1.replace("World", "JavaScript");
// console.log(newStr); // Hello, JavaScript!

// includes() method determines whether a string contains the characters of a specific string
// let str2 = "Hello, World!";
// let result = str2.includes("World");
// console.log(result);

// let str2 = "Hello, World!";
// let result = str2.includes("JavaScript");
// console.log(result);

// using + operator
// let str1 = "Hello, ";
// let str2 = "World!";
// let message = str1 + " " + str2;
// console.log(message);

// using template method
// let str5 = "Hello, ";
// let str6 = "World!";
// let message1 = `${str5}  ${str6}`;
// console.log(message1);

// concat() method concatenates two or more strings and returns a new string.
// let str3 = "Hello, ";
// let str4 = "World!";
// let concatenatedStr = str3.concat(str4);
// console.log(concatenatedStr);

// let result = 0.1 + 0.2;
// console.log(result); // 0.30000000000000004
// console.log(result.toFixed(2)); // 0.30
// console.log(typeof result.toFixed(2)); // string

// parseInt()
// let num = "10";
// console.log(parseInt(num)); // 10
// console.log(typeof parseInt(num)); // number

// parseFloat()
// let num = "10.5";
// console.log(parseFloat(num)); // 10.5

// isNaN()
// let result = "Hello" * 5;
// console.log(result); // NaN
// console.log(isNaN(result)); // true

// age validation
// let age = 'abc';
// if (isNaN(age)) { // true
//     console.log("Invalid age");
// }

// Mathematical Operations

// Math.round()
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));

// Math.floor()
// console.log(Math.floor(4.4));
// console.log(Math.floor(4.5));

// Math.ceil()
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.5));

// Math.random()
// console.log(Math.random());
console.log(Math.random() * 10);

// console.log(0.1 + 0.2); // 0.30000000000000004

// greet();
// var greet = function() {
//     console.log("Hello");
// };

// function greet() {
//     console.log("Hello");
// }

// var n = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// console.log(x);

// let x = 2;

// console.log("Hello World");
// console.log(5 + 6);

// let x, y, z;
// x = 5;
// y = 6;
// z = x + y;
// console.log(z); 

// // Assignment Operators - = += -= *= /= %=
// let a = 10;
// a += 5;
// console.log(a);

// let b = 10;
// b -= 5;
// console.log(b);

// let c = 10;
// c *= 5;
// console.log(c);

// let d = 10;
// d /= 5;
// console.log(d);

// let e = 10;
// e %= 3;
// console.log(e);

// // Logical Operators - && AND || OR ! NOT
// let a1 = true;
// let b1 = false;
// let c1 = a1 && b1;
// let d1 = a1 || b1;
// let e1 = !a1;
// console.log(c1);
// console.log(d1);
// console.log(e1);

// // Aithmetic Operators - + - * / % ** ++ --
// let a2 = 10;
// let b2 = 3;
// let c2 = a2 + b2;
// let d2 = a2 - b2;
// let e2 = a2 * b2;
// let f = a2 / b2;
// let g = a2 % b2;
// let h = a2 ** b2;
// let i = ++a2;
// let j = --b2;
// let k = +a2;
// let l = -b2;
// console.log(c2);
// console.log(d2);
// console.log(e2);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);
// console.log(k);
// console.log(l);

// // Unary Plus Operator 
// let a3 = "10";
// let b3 = +a3;
// console.log(b);
// console.log(typeof a3);
// console.log(typeof b3);

// let x1 = true;
// let y1 = false;
// console.log(+x1);
// console.log(+y1);

// let p = "";
// console.log(+p);

// let q = null;
// console.log(+q);

// let r = undefined;
// console.log(+r);

// // Unary Minus Operator
// let a4 = 10;
// let b4 = -a4;
// console.log(b2);

// let c3 = -20;
// let d3 = -c3;
// console.log(d3);

// let x2 = "25";
// let y2 = -x2;
// console.log(y2);
// console.log(typeof y2);
// console.log(typeof x2);

// let m = true;
// let n = false;
// console.log(-m);
// console.log(-n);

// // Comparison Operators
// let a5 = 10;
// let b5 = 20;
// let c4 = a == b;
// console.log(c4);

// let x3 = 10;
// let y3 = "10";
// let z1 = x3 == y3;
// console.log(z1);

// let p1 = 10;
// let q1 = "10";
// let r1 = p1 === q1;
// console.log(r1);

// let m1 = 10;
// let n1 = 10;
// let o = m1 === n1;
// console.log(o);

// let a6 = 10;
// let b6 = 20;
// let c5 = a6 != b6;
// console.log(c5);

// let x4 = 10;
// let y4 = "10";
// let z2 = x4 != y4;
// console.log(z2);

// let p2 = 10;
// let q2 = 20;
// let r2 = p2 > q2;
// console.log(r2);

// let m2 = 10;
// let n2 = 20;
// let o1 = m2 < n2;
// console.log(o1);

// let a7 = 10;
// let b7 = 10;
// let c6 = a7 >= b7;
// console.log(c6);

// let x5 = 10;
// let y5 = 20;
// let z3 = x5 <= y5;
// console.log(z3);

// var x = 10;

// if (true) {
//     const x = 20;
//     console.log(x);
// }

// console.log(x);

// if (true) {
//     var x = 20;
//     console.log(x);
// }

// console.log(x);

// if (true) {
//     let x = 20;
//     console.log(x);
// }