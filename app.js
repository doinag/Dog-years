//This variable is not going to change
let myAge = 27;

//Defining early years. 
let earlyYears = 2;
earlyYears *= 10.5;

//laterYears equals to 2 being subtracted from myAge
let laterYears = myAge - 2;

//Number of dog years by multiplating the laterYears variable by 4
laterYears *= 4;
console.log(laterYears);
console.log(earlyYears);
myAgeInDogYears = earlyYears + laterYears;

// stored my name in a variable and converted to lower case
const myName = "Doina";
myName.toLowerCase();
if (myAge < 2) {
  myAge *= 10.5;
  console.log(`My age in dog years is ${myAge}`);
} else {
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
}
