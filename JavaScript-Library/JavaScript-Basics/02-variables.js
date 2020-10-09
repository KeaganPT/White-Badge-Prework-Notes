//Description: Variables are containers to store values. That's it. Let's keep it simple for now.
//First declarations must be declared or created
var x; // this declares a variable named x into existence (the name of the variable can be almost anything)


//Initialized: initializing a variable gives it a value
x = 5; //we have initalized the value of x is 5 (JavaScript ,based on the value, gives the variable a specific type.)

//you can also create the variable and initalize it in one line
var theNumberFive = 5;

var x = 1; 
console.log(x);

//we can assign a CONSTANT value to a variable to stop it from changing as we use it in operators
const feetInMile = 5280; // There are always 5,280 feet in a mile and const keeps the value 5280
console.log(feetInMile);
//feetInMile = 5300; //This will cause and error because a const value has been assigned to var feetInMiles
//^^the error message that occures "TypeError: Assignment to constant variable"

//Naming of variables
var ageOfMyOldestFerret = 40;
var numberOfEggsInOneSitting = 50;
//variable names can be almost anything they should be descriptive though. For example if it was a first name
var firstName = "Jon";

//Camel Casing: in this course we are only camelCasing variable names. ex:
var numberOfGrammysIHaveWon = 0;
var myBirthYear = 1976;
var newNumber = 1 * numberOfGrammysIHaveWon;

var age = 40;
var ageInAugust = age + 1;  
console.log(ageInAugust);//Result 41

var eleven = 11;
console.log(eleven * eleven); //Result 121

var nineteen = 19;
console.log(age - nineteen); //Result 41 - 19 = 21 

//Variable names can not begin wirh a digit!
//there are reserved words that should also never be a variable name!

/*Resevered Words list: 
    abstract
    boolean
    break
    byte
    case
    catch
    char
    class
    const
    continue
    debugger
    default
    delete
    do
    double
*/