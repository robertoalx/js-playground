const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput ==='bomb') {
      return userInput;
    }
    else {
      console.log('Error!')
    }
  }
  
  //console.log(getUserChoice('paper'));
  //console.log(getUserChoice('fork'));
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb') {
      return 'You won!';
    }
    if(userChoice === computerChoice){
      return 'Game is a tie.';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer won!';
      }
      else{
        return 'You won!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer won!';
      }
      else 'you won!';
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock') {
        return 'Computer won!';
      }
      else {
        return 'You won!';
      }
    }
  }
  
  //console.log(determineWinner('rock', 'paper'));
  //console.log(determineWinner('paper', 'paper'));
  //console.log(determineWinner('scissors', 'paper'));
  
  function playGame() {
    let userChoice = getUserChoice('bomb')
    let computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}`);
      console.log(`The computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()
  

  export {
    getUserChoice,
    getComputerChoice,
    determineWinner,
    playGame
  }