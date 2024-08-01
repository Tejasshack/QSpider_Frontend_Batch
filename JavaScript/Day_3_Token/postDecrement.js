// Postfix Increment (a++) and Postfix Decrement (a--) Operators
// Postfix Increment (a++)
// The postfix increment operator (a++) returns the current value of the variable and then increments it by one.
/*
let a = 5;
let b = a++; // b is assigned the current value of a (5), then a is incremented to 6
console.log(a); // 6
console.log(b); // 5
 */




let a = 5;
a = a++;
a = a++;
a = a++;
a = a++;
let b = a++;
b++;
console.log(a);
console.log(b);


let a = 5;
a = a++;
a = a++;
a = a++;
a = a++;
let b = a++ * 2;
b++;
console.log(a);
console.log(b);


let a = 1;
a = a++*2;
a = a++*2;
a = a++*2;
a = a++*2;
let b = (++a*3 + a++*2 + a--*2) / (a++*2)
  b= (b++ +  b--)*3/2
console.log(a)
console.log(a)




