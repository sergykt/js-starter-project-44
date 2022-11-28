import {
  askName, randomInteger, isAnswerCorrect, getAnswer,
} from '../index.js';

const gcd = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  let x = randomInteger(1, 100);
  let y = randomInteger(1, 100);
  let z;
  console.log(`Question: ${x} ${y}`);
  if (x < y) {
    z = x;
    x = y;
    y = z;
  }
  while (x % y !== 0) {
    z = x % y;
    x = y;
    y = z;
  }
  const correctAnswer = y;
  const answer = Number(getAnswer());
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) gcd(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('Find the greatest common divisor of given numbers.');
  gcd(name);
};

export default game;
