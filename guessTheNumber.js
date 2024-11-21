// Assume rangeStart and rangeEnd are always greater than 0.
// rangeStart is always less than rangeEnd.

function isDigit(number, rangeStart, rangeEnd) {
  return number >= rangeStart && number <= rangeEnd;
}

function makeHint(secretNumber, guessedNum) {
  if (guessedNum < secretNumber) {
    console.log(guessedNum + " Too low! Try a higher number");
  }

  if (guessedNum > secretNumber) {
    console.log(guessedNum + " Too high! Try a smaller number.");
  }
}

function playAgain(rangeStart, rangeEnd, maxAttempts) {
  if (confirm("Do you want to play again?")) {
    startGame(rangeStart, rangeEnd, maxAttempts);
  } else {
    console.log("\n\nGoodbye");
  }
}

function makeWelcomeMsg(rangeStart, rangeEnd, maxAttempts) {
  const msg = "Welcome to Guess the Number! \n The secret number is between " + rangeStart + " and " + rangeEnd + ". You have " + maxAttempts + " attempts to find it.\n\n";
  return msg;
}

function getRandomNum(rangeStart, rangeEnd) {
  const difference = rangeEnd - rangeStart;
  return rangeStart + Math.floor(Math.random() * (rangeEnd - rangeStart));
}

function isAttemptOver(rangeStart, rangeEnd, maxAttempts, index) {
  if (index === 0) {
    console.log("\n\n Oh no! You've used all your attempts. Better luck next time!");
    playAgain(rangeStart, rangeEnd, maxAttempts);
  }
}

function isGuessCorrect(secretNumber, rangeStart, rangeEnd, maxAttempts) {
  let index = maxAttempts;

  while (index > 0) {
    const guessedNum = +makeGuessMsg(index);
    const previousIndex = index;
    const isValidInput = isDigit(guessedNum, rangeStart, rangeEnd);

    if (!isValidInput) {

      console.log("Invalid input! Please enter a number.");
      index = previousIndex;
      continue;
    }

    if (secretNumber === guessedNum) {
      console.log("\n\nBravo! You've nailed it. The number was " + secretNumber + "!");
      playAgain(rangeStart, rangeEnd, maxAttempts);
      break;
    }

    makeHint(secretNumber, guessedNum);
    index--;
  }

  isAttemptOver(rangeStart, rangeEnd, maxAttempts, index);
}

function makeGuessMsg(remainingAttempts) {
  return prompt("\nTake a guess!(Remaining attempts:" + remainingAttempts + ")");
}

function startGame(rangeStart, rangeEnd, maxAttempts) {
  console.log(makeWelcomeMsg(rangeStart, rangeEnd, maxAttempts));
  const secretNumber = getRandomNum(rangeStart, rangeEnd);
  isGuessCorrect(secretNumber, rangeStart, rangeEnd, maxAttempts);
}

startGame(100, 200, 10);
