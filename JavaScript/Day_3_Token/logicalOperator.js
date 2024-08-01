/*Comparison Operators
These operators compare two values and return a boolean:

==>Equal (==): Checks if two values are equal (abstract equality). Example: 5 == "5" results in true.
==>Not Equal (!=): Checks if two values are not equal. Example: 5 != "5" results in false.
==>Strict Equal (===): Checks if two values are equal (strict equality, including type). Example: 5 === "5" results in false.
==>Strict Not Equal (!==): Checks if two values are not equal (strict inequality, including type). Example: 5 !== "5" results in true.
==>Greater Than (>): Checks if the left value is greater than the right value. Example: 5 > 3 results in true.
==>Greater Than or Equal (>=): Checks if the left value is greater than or equal to the right value. Example: 5 >= 5 results in true.
==>Less Than (<): Checks if the left value is less than the right value. Example: 5 < 3 results in false.
==>Less Than or Equal (<=): Checks if the left value is less than or equal to the right value. Example: 5 <= 5 results in true. */

// * Prompt the user to enter a number
let a = +prompt("Enter a Number");

// * Check if the number is divisible by 7 and ends with 7
if (a % 7 === 0 && a % 10 === 7) {
  // * AND (&&) operator ensures both conditions must be true:
  // * 1. The number is divisible by 7 (a % 7 === 0)
  // * 2. The number ends with 7 (a % 10 === 7)
  console.log(true);
  prompt(true);
} else {
  console.log(false);
}

// * Prompt the user to enter three numbers
let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = +prompt("Enter third number");

// * Determine the largest number among a, b, and c
let result1 = a > b ? (c > a ? c : a) : b;
// * The ternary operator is used for concise if-else conditions:
// * 1. If a is greater than b (a > b)
// *    - Check if c is greater than a (c > a). If true, result1 is c. Otherwise, result1 is a.
// * 2. If a is not greater than b, result1 is b.

console.log("The Biggest Number is ::" + result1);

/*Conditional (Ternary) Operator
This operator assigns a value based on a condition:
Ternary (? :): A shorthand for an if-else statement. Example: let result = (a > b) ? "a is greater" : "b is greater" */

// * Prompt the user to enter a number
let a = +prompt("Enter first number");

// * Determine if the number is odd or even using the ternary operator
let result = a % 2 === 0 ? "even" : "odd";
// * If a is divisible by 2 (a % 2 === 0), it is even. Otherwise, it is odd.

console.log(result);

/* Leap year program */

// * Prompt the user to enter a year
let a = +prompt("Enter a year");

// * Determine if the year is a leap year
let result =
  (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0
    ? // * A year is a leap year if:
      // * 1. It is divisible by 4 (a % 4 === 0) AND not divisible by 100 (a % 100 !== 0)
      // * OR
      // * 2. It is divisible by 400 (a % 400 === 0)
      "Leap year"
    : "Not a Leap year"; // * If the condition is false, it is not a leap year

console.log(result);
