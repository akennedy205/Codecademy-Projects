const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
      return userInput
    } else {
      console.log('Error, please type: rock, paper or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'paper';
    break
    case 1:
      return 'rock';
    break
    case 2:
      return 'scissors';
    break
  }
  };
   
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'Game is a tie';
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'Sorry, CPU wins';
      } else {
        return 'Congrats, you win!';
      }
    }
  
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Sorry, CPU wins';
      } else {
        return 'Congrats, you win!';
      }
    }
  
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Sorry, CPU wins;'
      } else {
        return 'Congrats, you win!';
      }
    }
  
    if (userChoice === 'bomb'){
      return 'Congrats, you win!';
    }
  };
  /*/Step 10 test
  console.log(determineWinner('rock', 'paper'));
  console.log(determineWinner('scissors', 'paper'));
  console.log(determineWinner('rock', 'rock')); */
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The CPU threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  
  