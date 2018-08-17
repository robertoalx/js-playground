// Created variable with the name myAge and is equal with the value 28
const myAge = 50;
//created a variable earlyEars will be equal by 2 and this variable will change
let earlyYears = 2;
earlyYears = 2 * 10.5
//create new variable laterYears and will be equal with myAge - 2 , we subtract 2 from it.
let laterYears = myAge - 2;
//Multiply the laterYears by 4 to calculate the number of dog years.
laterYears *= 4;
//console.log(earlyYears);
//console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
//create a variable with myName and use the toLowerCase method to return all letters in the string in lowercase.
const myName = "Robert".toLowerCase();
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

export default {
    myName,
    myAgeInDogYears
}