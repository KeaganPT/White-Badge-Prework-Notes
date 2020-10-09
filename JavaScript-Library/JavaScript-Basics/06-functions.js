//A Function is a block of code created by the programmer. The function preforms a task and often returns a 
//value, but not always.

//Declaration
//example of declaring a function (the whole function is called a function definition)

//1         //2
function hello() {
    //3
    console.log("Hello World!");
}
/* 1) use function keyword;
   2) name the function (hello)
   3)Execute code
*/

//Activating a Function
//to execute a function we call or invoke it. Using the name of the function, followed bythe parentheses, calls it.
hello(); // <<calls/invokes the funcion hello.

//you can call the function as many times as needed.

//Practice: write a function to print "Pacers Won!" Then call the function.
function pacersWon(){
    console.log("Pacers Won!");
}
pacersWon();

pacersWon();
pacersWon();
pacersWon();

//Paramaters and Arguments
//Paramaters are the names listed in the parentheses of the function definition
//ex                  (paramaters)
function bottleCapper(bottle, cap) {
    return bottle + cap;
}

//Arguments are the real values received by the function when you call it.
//ex                (arguments)
console.log(bottleCapper("green bottle","white cap"));

//in the example we have assigned argument green bottle to the parameter bottle

function numberEntered(num){
    console.log("The number you entered was:",num," Is this correct?");
}

numberEntered(5);

//A parameter is similar to a variable. The parameter num can change each time we call the function. 
//When we call the function, we have to pass an argument for the parameter.

numberEntered(4);

//Two Parameters
function addAnyTwoNumbers(x,y){
    console.log(x+y);
}

addAnyTwoNumbers(4,5);
addAnyTwoNumbers(6,11);
addAnyTwoNumbers(7,8);

//Practice
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

subtractTwoNumbers(5,7);

//Return keyword.
/* When JS reaches a return statement, execution stops. The function willl return a value. For example,
   create a function to return a batting average (number-of-at-bats divided by the number-of-hits).
   the function has two paramaters (1. number-of-at-bats, 2. number-of-hits)
*/ 

function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

/* The Flow Of Events
    1. At the console.log(), JavaScript sees getMyBattingAverage.
    2. JS calls the function and sends 250 into atBats and 91 into numberOfHits.
    3.JS declares myAverage and initializes it to numberOfHits / atBats.
    4. JS will return the value in myAverage to the place where the function was called: inside the parentheses 
        of the console.log()
    5. JS displays 0.364
*/

//Practice (write a function to return the sum of two numbers (params), Write a function with params (firstName, lastName) return fullname)

function addTwoNumbers(x , y){
    let sum = x + y;
    return sum;
}

console.log(addTwoNumbers(1,1));

function makeName(firstName, lastName){
    let fullName = firstName + " " + lastName;
    return fullName;
}

console.log(makeName("Greg","Jones"));

//Challenge Q: Write a function to calculate and return the totalPrice of a quantity of products, includes 7% tax

//Challenge A:
function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}

console.log(calculatePriceIndiana(18,5));

//common question is to explain how the return satement works in a function. 

//The return statement is what the function is working till or the answer the function spits out.
//(come back to this)