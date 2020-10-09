//Loops allow us to repeatedly execute a block of code until a condition is met.

for (let i = 1; i <= 100; i +=1){
    console.log(i);
}

/* Syntax for a for loop
            1.                  2.              3.
for ([initialExpression]; [condition]; [incrementexpression])
    statement

1: initlExpression sets the starting value of a loop control variable (LCV). In the example following, i is the LCV
2:condition is evaluated, if true, stay in loop, otherwise exit loop. condition is i<= 10.
3: incrementExpression updates the LCV i++ adds 1 to i.
*/

for (let i = 1; i <= 10; i++){
    console.log("number:",i);
}

//we create and initialize i to 1 ; then it checks if i is less than or equal to 10, if the condition is true
//execute console.log("Number:"i); Next: i++ then it loops starting when it checks if i is less than or = to 10.

//practice 1) loop going from 0 to 50 by 5 2) loop that goes from 20 to 1 by -1 3) starting at 3 and increases by 5 but doesnt go over 30

for (let i= 0; i <=50; i += 5){
    console.log(i);
}

for (let i = 20; i >=1; i+= -1){
    console.log(i);
}

for (let i = 3; i <=30; i+=5){
    console.log(i);
}

//Practice
console.log("Prctice 1");

for (let i = 25; i <= 200; i+= 25){
    console.log(i);
}

console.log("Practice2");

for (let i = 6; i <= 10; i+=2){
    console.log(i);
}

console.log("Practice3");

for (let i = 100; i >=10; i-=5){
    console.log(i);
}

console.log("Pratice4");

function pacersWon(){
    console.log("Pacers Won!");
}

for (let i = 0; i <= 5; i++){
    pacersWon();
}