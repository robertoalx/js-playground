import other from './other';
import {getMeUnique, sumNumbers} from './es6-unique-array';
// import {raceNumber, early, age} from './time-to-race';
// import playback from './rock-paper-scissors';
import {storyWords, sentencesCount, reallyCount, veryCount, basicallyCount}from './linter';

// other('Others,');
// console.log(getMeUnique([1, 2, 3, 2, 4, 2, 1, 6]))
// console.log(sumNumbers(1, 2, 3, 2, 4, 2, 1, 6))
// console.log(age, raceNumber);
// playback
console.log("Word count: " + storyWords.length);
console.log("Sentence count " + sentencesCount);
console.log("really: " + reallyCount);
console.log("very: " + veryCount);
console.log("basically: " + basicallyCount);   