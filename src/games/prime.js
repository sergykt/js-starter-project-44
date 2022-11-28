import {
  askName, randomInteger, isAnswerCorrect, getAnswer, isNumberPrime,
} from '../index.js';

const prime = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const x = randomInteger(2, 1000);
  console.log(`Question: ${x}`);
  const answer = getAnswer();
  const correctAnswer = isNumberPrime(x) ? 'yes' : 'no';
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) prime(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  prime(name);
};

export default game;
