import readlineSync from 'readline-sync';

function randomInteger(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isAnswerCorrect = (answer, correct, name) => {
  if (answer === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

function getRandomOperation() {
  const arr = ['+', '-', '*'];
  return arr[Math.floor(Math.random() * arr.length)];
}

const getRandomProgression = () => {
  const arr = [];
  const rand = randomInteger(1, 20);
  arr[0] = randomInteger(1, 100);
  for (let i = 1; i <= 9; i += 1) {
    arr[i] = arr[i - 1] + rand;
  }
  return arr;
};

const isNumberPrime = (number) => {
  const limit = Math.trunc(number ** 0.5);
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

export {
  randomInteger, askName, getRandomOperation, isAnswerCorrect, getAnswer, getRandomProgression,
  isNumberPrime,
};
