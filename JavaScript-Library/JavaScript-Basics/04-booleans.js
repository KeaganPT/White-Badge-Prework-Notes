//Description Often there will be data types that can only have one of 2 possible values such as a true/false,
// yes/no, or On/Off. Boolean is the data type used for this i JavaScript, its value can only be true or false

//exmples:
let isLoggedIn = true;
let isAuthenticated = true;
let hasLoggedInToday = false;
let hasToken = false;

//Boolean values are often used with comparison/relational operators
/*
operator        Meaning
  ==            Equality
  ===           Strict Equality
  !=            Inequality
  !==           Strict Inequality
  >             Greter than
  >=            Greater than or equal
  <             Less than
  <=            Less than or eqaul
*/

console.log(2 > 1); //true
console.log(3 < 2); //false

var test = 2 >= 3; //what will this print? 
console.log(test); //false
console.log("Two is greater than one?"+ (2 > 1 )); //Two is greater than one? true.
console.log(3 >= 1); //true

// == VS ===
// Equality (==) "converts the operands if they are not of the same type, then applies strict comparison."
// Identity/Strict Equality (===) "the identity operator returns true if the operands are strictly equal with no type conversion"

/* examples and reasoning

    2 == "2";   result: true,  Reason: This checks for equality not type.
    2 === "2";  result: false, Reason: Equality is the same, but type is different.
    "Password12!!" === "Password12!!"; result: true   Reason: Equality AND type are the same.
 */

 console.log("Password12!" === "Password12!!"); //Returns false
 console.log(1 !== 2); //returns true
 console.log(10 !== 10); //returns false

 //Logical Operators
 //there are 3 logical operators: Two are binary &&(and) plus ||(or), and one is unary !(not). 

 /* 
    operator: &&        syntax: expr1 && expr2      description: If expr1 can be converted to true, return expr2
                                                                ,else return expr1.

    operator: ||        syntax: expr1 || expr2      description: If expr1 can be converted to true, return expr1,
                                                                else return expr2

    operator: !         syntax  !expr               description: Returns false if its single operand can be 
                                                                converted to true; otherwise, returns true
 */

 console.log("&& :", 2===2 && 1===1); //true because 2===2 returns true so expr2 is returned which is also true
 console.log("|| :", 2===2 || 2===1); //true because 2===2 returns trues so expr1 is returned which is true.
 console.log("!=", 2 != 1); //true because 2 indeed does not equal to 1.