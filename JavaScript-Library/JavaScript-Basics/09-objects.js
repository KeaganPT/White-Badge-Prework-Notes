//Objects: An object is a data type allowing us to store a collection of properties and methods. 
//Object Literals: Example

//1                 //2
let bobAlcorn = {
    //3             //4
    name        : "Bob Alcorn",
    age         : 59,
    vocation    :"Chief operating Officer",
    isRetired   : false
};

/*  KEY POINTS
    1. Use the let keyword, create a name and add an equal sign (=)
    2. Next add {}
    3. name, ge, vocation, and isRetired are properties or keys of the object. Eacch has a : preceding the value.
    4.Each of the properties has a value. "Bob Alcorn" 59 "Chief Operating Office" false.
*/

//DOT NOTATION
//The dot . is an operator, like a plus sign. It gives you access to the object's properties and their values
//Use the object's name, then the ., then the property name. This accesses the value of the property.

console.log(bobAlcorn); //Prints the whole Object
console.log(bobAlcorn.name);//Prints the value of property name.
console.log(bobAlcorn.age);//Prints the value of property age.


//UNDEFINED
//Undefined is what comes up when we try to access a non-existing property.
//ex: console.log(bobAlcorn.middleName)); //undefined: middleName does not exist.

console.log(bobAlcorn);
console.log(bobAlcorn.age);

let player = {
    username : "QuadS",
    power    : 745,
    toughness : 21
}

console.log(player.username);

let friend = {
    name        : "Cole Southwood",
    age         : 21,
    songLiked   : "Trash",
    movie       : "Movies are for cowards."
}

let Movie = {
    name        : "Monty Python and the Holy Grail",
    genre       : "Comedy",
    length      : "1 hour and 32 minutes."
}

let song1 = {
    name        : "In The End",
    artist      : "Young Dubliners",
    length      : "3 minutes and 53 seconds",
}

console.log(song1.mat);