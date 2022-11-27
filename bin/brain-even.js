#!/usr/bin/env node

import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const evenNumber = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let k = 0;
  while (k < 3) {
    const number = randomInteger(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'no' && number % 2 === 1) {
      console.log('Correct!');
      k += 1;
    } else if (answer === 'yes' && number % 2 === 0) {
      console.log('Correct!');
      k += 1;
    } else {
      console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

console.log('Welcome to the Brain Games!');
const name = askName();
evenNumber(name);
