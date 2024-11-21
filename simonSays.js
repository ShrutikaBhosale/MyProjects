function makeWelcomeMsg() {
  console.log("\nLet's check your memory !!\n\n");
  console.log("-----------------------------");
  console.log('| 🟩  🟥  🟦  🟧  🟪  🟨  ⬜️ |');
  console.log('|                            |');
  console.log("| g   r   b   o   p   y   w  |");
  console.log("-----------------------------\n\n");
}

function getRandomColor(colorCode) {
  let color = '';
  switch (colorCode) {
    case 1: color = '🟩'; break;
    case 2: color = '🟥'; break;
    case 3: color = '🟦'; break;
    case 4: color = '🟧'; break;
    case 5: color = '🟪'; break;
    case 6: color = '🟨'; break;
    case 7: color = '⬜️'; break;
  }
  return color;
}

function makeString(colorString, score) {
  const colorCode = Math.ceil(Math.random() * 7);
  console.log(getRandomColor(colorCode));
  const userInput = getInput();

  score += 1;
  switch (colorCode) {
    case 1: colorString += 'g'; break;
    case 2: colorString += 'r'; break;
    case 3: colorString += 'b'; break;
    case 4: colorString += 'o'; break;
    case 5: colorString += 'p'; break;
    case 6: colorString += 'y'; break;
    case 7: colorString += 'w'; break;
  }

  if (userInput !== colorString) {
    console.log("😌 Ohh no, You Lost!!");
    console.log("\n🥳🎊 You successfully memorize " + score + " colors 🥳🎊")
    console.log("\n😊 Thank You 😊");
    return;
  }

  console.clear();
  makeWelcomeMsg();
  return makeString(colorString, score);
}

function getInput() {
  const userInput = prompt("\nEnter color code:");
  return userInput;
}

function startGame() {
  let colorString = '';
  let score = -1;
  makeWelcomeMsg();
  makeString(colorString, score);
}

startGame();
