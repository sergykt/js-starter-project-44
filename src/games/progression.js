import {
  askName, isAnswerCorrect, getAnswer, getRandomProgression,
} from '../index.js';

const progression = (userName, k = 0) => {
  if (k === 3) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }
  const arr = getRandomProgression();
  let index = -0.5 + Math.random() * (10);
  index = Math.round(index);
  const correctAnswer = arr[index];
  arr[index] = '..';
  const str = arr.join(' ');
  console.log(`Question: ${str}`);
  const answer = Number(getAnswer());
  const result = isAnswerCorrect(answer, correctAnswer, userName);
  if (result) progression(userName, k + 1);
};

const game = () => {
  const name = askName();
  console.log('What number is missing in the progression?');
  progression(name);
};

export default game;
