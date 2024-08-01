/* Predecrement operator (--) 

// Postfix Decrement (a--)
// The postfix decrement operator (a--) returns the current value of the variable and then decrements it by one
 Example:

javascript
Copy code
let a = 5;
let b = a--; // b is assigned the current value of a (5), then a is decremented to 4
console.log(a); // 4
console.log(b); // 5  */



let a = 5;
    a = --a;
    a = --a;
    a = --a;

    console.log(a)

let a = 10 ;
a = --a + ++a;
let b = (++a*2 + --a*2) / (++a*2)
b = ++b;
console.log(a)
console.log(b)

let a = 5;
a = ++a*3 + --a*2 - ++a*2
a=(++a*3/2) + (--a*2/3)
let b = (++a + --a)*3/2
b = (++b*2 - --b*2 + ++b*2)/(++a + --a)
console.log(a)
console.log(b)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
