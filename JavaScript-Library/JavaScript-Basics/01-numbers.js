console.log(1);             //Result: 1
console.log(1 + 1);         //result: 2 
console.log(1.1);           //Result: 1.1 
console.log(1.1 * 1.1);     //Result: 1.210000000000002 (Will be discussed in class) 

// Basic Operators

console.log(5 + 5); //Addition operator (+)
console.log(6 - 6); //Subtraction operator (-)
console.log(7 * 7); //Multiplication operator (*)
console.log(8 / 8); //Division operator (/)
console.log(2 ** 3); //Exponentiation operator (**)

//Modulus Operator (%) (Modulus is finding the remainder of the number on the left 
//divided by the number on the right)
console.log(10 % 5); //result = 0   (10/5 = 2 remainder 0 so the result is 0)
console.log(10 % 4); //Result = 2   (10/4 = 2 remainder 2 so the result is 2)
console.log(10 % 9); // Result = 1  (10/9 = 1 remainder 1 so the result is 1)

/* 
Shorthand Operators 
    +=    example: a += b  equivalent: a= a + b
    -=    example: a -= b  equivalent: a = a - b
    *=    example: a *= b  equivalent: a = a * b
    /=    example: a /= b  equivalent: a = a / b
    %=    example: a %= b  equivalent: a = a % b
*/

console.log("example of shorthand operator function.");

var y = 5;
y = y + 1;

console.log(y);

y += 1;
console.log(y);
//the variable y changes 

var z = 10;
console.log(z);
z +=1;
console.log(z);

var a = 20;
a -=1;

var b =25;
b*=2;

var c = 50;
c/=2;

var age = 40;
age += 1;
age -= 20;
age *= 20;
console.log(age);