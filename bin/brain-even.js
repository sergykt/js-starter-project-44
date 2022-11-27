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

const evenNumber = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = randomInteger(0, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (answer === correctAnswer) {
    console.log('Correct!');
    evenNumber(userName, k + 1);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

console.log('Welcome to the Brain Games!');
const name = askName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenNumber(name);
