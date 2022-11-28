import {
  askName, randomInteger, isAnswerCorrect, getAnswer,
} from '../index.js';

const evenNumber = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const number = randomInteger(1, 100);
  console.log(`Question: ${number}`);
  const answer = getAnswer();
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) evenNumber(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  evenNumber(name);
};

export default game;
