// There is 3 variables + if else, else if statements and Logical operators.
let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;

if(early && age > 18) {
  raceNumber += 1000;
} 
if(early && age > 18){
  console.log(`Today the first race will start at 9:30 am, and your race number is: ${raceNumber}.`);
}
else if(!early && age > 18) {
  console.log(`The second race will start at 11:00 am, and your race number is: ${raceNumber}.`)
}
else if(age < 18) {
  console.log(`If you are under 18 will be only one race at 12:30pm and your race number is: ${raceNumber}.`);
}
else {
  console.log('Check the registration desk');
}

export {
    raceNumber,
    early,
    age
  }