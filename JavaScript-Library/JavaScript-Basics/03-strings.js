//examples:
console.log("I was born in Georgia.");
console.log("I've lived in three states.");
console.log("I like Indiana.");
console.log("My bank account had enough money for school. It's gone now.");

//We use let, var, or const to create a string variable.
var tweet = "lebron is king! Westbrook for president!";
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespaulconnor';

//Numbers in a String
//numbers in a string are just text not values. They can't be used in math
let age = "21";
let years = "3";
console.log(age + years); // you won't get 24, but you will get 213 instead because it combines the text.

//Concatenation: is adding two or more strings together. (+) is used as the concatenation operator
var birthCity = "Columbus";
var birthState = "Georgia";

console.log(birthCity + ", " + birthState);

//Strings and Numbers: strings and numbers can be mixed together, JavaScript turns the numbers into strings, 
//this is known as coercion
let ageInAugust = 40;
let highSchool = "Bill Murray High School";
let graduatedHighSchool = 1994;
const commaWithSpace = ", ";

console.log(highSchool + commaWithSpace + graduatedHighSchool);
console.log("My age in August:", ageInAugust);

console.log("I graduated from " + highSchool + " in " + graduatedHighSchool + ".");

//JavScript has an extensive library of methods. We access methods with the dot(.) operator
/*Table of some methods 
    Method  :               Description :  
        str.length              Returns length of str
        str.toUpperCase         Converts str to all UPPERCASE letters
        str.toLowerCase         Converts str to all lowercase letters
        str.split(seporator)    splits str into an array of substrings seperated by the paramater seporator
        str.slice(start, end)   Extracts asection of str from start to end
*/
//examples
//.length
console.log(highSchool.length);

console.log(highSchool.toUpperCase()); //result: BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //result: bill murray high school

//.split  and  .slice
console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School']
console.log(highSchool.slice(0, 11)); //Extracts from highSchool[0] to and including highSchool[11]