//Conditional statements, using boolean variables, are in all of JavaScript applications. 
//Conditionals check conditions in the program. They can alter the stte or flow of the application based on conditions being true or false

//1
var isOn = true;

//2    //3
if(isOn === true) {
    console.log("the light is on.");
}

//Shorter Phrasing
var isOn = true;
    //1
if(isOn) {  // this is the same as: if(isOn === true)
    console.log("the light is on. It is bright");
}

//this is implicitly checking if isOn is true: equivalent to the original statement (isOn === true)

//Practice
var weather = 75;

if(weather > 70) {
    console.log("wear shorts today! It's going to be hot today!")
}

//More Practice

var cavemanHungry = true;

if(cavemanHungry === true) {
    console.log("Caveman need food");
}

var episodeNumber = 6;

if(episodeNumber === 10) {
    console.log("I am sad that this season is ending.");
}

//Else statements set a change for when the if paramater isnt met, for example if episodeNumber != 10 the else statement would run.