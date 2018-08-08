import other from './other';
import {getMeUnique, sumNumbers} from './es6-unique-array';
import {raceNumber, early, age} from './time-to-race';

other('Others,');
console.log(getMeUnique([1, 2, 3, 2, 4, 2, 1, 6]))
console.log(sumNumbers(1, 2, 3, 2, 4, 2, 1, 6))
console.log(age, raceNumber);
