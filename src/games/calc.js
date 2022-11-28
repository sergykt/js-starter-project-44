import {
  askName, randomInteger, getRandomOperation, isAnswerCorrect, getAnswer,
} from '../index.js';

const brainCalc = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const x = randomInteger(1, 100);
  const y = randomInteger(1, 100);
  const operation = getRandomOperation();
  console.log(`Question: ${x} ${operation} ${y}`);
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = x + y;
      break;
    case '-':
      correctAnswer = x - y;
      break;
    default:
      correctAnswer = x * y;
  }
  const answer = Number(getAnswer());
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) brainCalc(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('What is the result of the expression?');
  brainCalc(name);
};

export default game;
