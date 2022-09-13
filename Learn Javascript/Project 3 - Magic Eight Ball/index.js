let userName = 'Kyle';
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');

let userQuestion = 'Will I win the lottery tomorrow?';
console.log(`${userName} asked, ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
  case 0:
  eightBall = 'It is certain';
    break;
  case 1:
  eightBall = 'Reply hazy try again';
    break;
  case 2:
  eightBall = 'Cannot predict now';
    break;
  case 3:
  eightBall = 'Do not count on it';
    break;
  case 4:
  eightBall = 'Invest in crypto, the block-chain is THE place to be.';
    break;
  case 5:
  eightBall = 'Filler text';
    break;
  case 6:
  eightBall = 'Stop looking for divine intervention and buy that lottery ticket';
    break;
  case 7:
  eightBall='Get creative with these eight-ball entries';
};

console.log(eightBall);