//Variable of my age
var myAge = 24;
//Early years code for yr 1 and 2 of dog
var earlyYears = 2;
earlyYears *= 10.5;
//First 2 years accounted for.
let laterYears = myAge -2;

//Calculating dog years for later years
laterYears *= 4;
//Dog years ages
let myAgeInDogYears = earlyYears + laterYears;
//Using the .toLowerCase and then store the name
var myName = 'Elvis Presley'.toLowerCase();

//String interpolation for all the info
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);


