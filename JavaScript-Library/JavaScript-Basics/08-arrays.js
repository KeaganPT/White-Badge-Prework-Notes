//Array is a numerically indexed map of values. An array doesn't store one value, it stores a list of values. 
//Arrays allow us to collect items like names, usernames, product names, prices, etc

//Sample Code

let rainbowColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
let raceWinners = [33,72,64];
let myFavoriteThings = ['Broccoli', 46074, 'Zombie Cats From Mars'];

/* Key points 
    -Create an array like a variable with any name
    -Use square brackets [] to collect/initialize values.
    -We seperate items with commas within the brackets.
    -We can have a collection of one type OR
    -we can assign multiple types:
*/
var mySecretSpyInfo = ["james Bond", 007, true];//A string, a number (although the 00 is ignored), and a boolean
console.log(mySecretSpyInfo);
//The 0 index
//The index of an array starts at 0
                      //1     //2       //3
var countryArray = ["USA", "Russia", "China"];

//Access Values 
//You access array values using braket notation []. Print the array values
console.log(countryArray[2]);
console.log("country Array:", countryArray[0]);

