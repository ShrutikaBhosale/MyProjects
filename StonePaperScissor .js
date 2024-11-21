const STONE = 0;
const PAPER = 1;
const SCISSOR = 2;
function stonePaperScissor(userChoice) {

  const compChoice = Math.round((Math.random() * 10) % 3);
  console.log(compChoice);

  if (compChoice === userChoice) {
    console.log("😊It's Tie😊");
  }
  if (compChoice === STONE && userChoice === PAPER) {
    console.log("🎉🥳 Congratulations 🎉🥳 \n You won");
  }
  if (compChoice === STONE && userChoice === SCISSOR) {
    console.log("😔 Ohhh 😔  \n You Lost");
  }
  if (compChoice === PAPER && userChoice === STONE) {
    console.log("😔 Ohhh 😔  \n You Lost");
  }
  if (compChoice === PAPER && userChoice === SCISSOR) {
    console.log("🎉🥳 Congratulations 🎉🥳 \n You won");
  }
  if (compChoice === SCISSOR && userChoice === STONE) {
    console.log("🎉🥳 Congratulations 🎉🥳 \n You won");
  }
  if (compChoice === SCISSOR && userChoice === PAPER) {
    console.log("😔 Ohhh 😔  \n You Lost");
  }
}

console.log('🪨 0 : Stone \n 📃 1 : Paper \n ✂️ 2 : Scissor');
const userChoice = prompt("Enter corresponding number for stone paper scissor");
if (+userChoice === 0 || +userChoice === 1 || +userChoice === 2) {
  stonePaperScissor(+userChoice);
} else {
  console.log('Enter valid input');
}
