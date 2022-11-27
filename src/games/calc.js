import {
  askName, randomInteger, getRandomOperation, isAnswerCorrect, getAnswer,
} from '../index.js';

const calc = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const x = randomInteger();
  const y = randomInteger();
  const operation = getRandomOperation();
  console.log(`Question: ${x} ${operation} ${y}`);
  let correctAnswer;
  if (operation === '+') correctAnswer = x + y;
  if (operation === '-') correctAnswer = x - y;
  if (operation === '*') correctAnswer = x * y;
  const answer = Number(getAnswer());
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) calc(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('What is the result of the expression?');
  calc(name);
};

export default game;