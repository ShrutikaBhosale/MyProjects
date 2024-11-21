let score = 0;

function makeGame() {
  console.log("Lets play Game");

  if (confirm("You want to join?")) {
    const name = prompt("Enter your Name:");
    console.log('\n 🤩 LEVEL 1 🤩 ');
    level1();
    console.log('\n\n Lets Play \n 🤩 LEVEL 2 🤩');
    level2();
    console.log('\n \n Lets Play \n 🤩 LEVEL 3 🤩');
    level3();

    console.log("\n 🎉🥳🎊🎁 Congratulations!!" + name);
    console.log(" 🎉🥳🎊🎁 \n Your Score : ", score);
    console.log("\nThank You!!");
  } else {
    console.log("\nOkay!! fine");
  }
}

function getInput() {
  return prompt("Enter Guessed word:");
}

function findIncreament(levelNum) {
  if (levelNum === 1) {
    return 10;
  }
  if (levelNum === 2) {
    return 20;
  }
  if (levelNum === 3) {
    return 30;
  }
}

function addWord(word, ans, levelNum) {
  console.log("\n\n Your Riddle is:", word);
  let userWord = getInput();

  if (userWord === ans) {
    score += findIncreament(levelNum);
  } else {
    score -= findIncreament(levelNum);
    if (score < 0) {
      score = 0;
    }
    console.log("\n 😔 Ohh wrong word!! \n Your Score is Reduced by 10");
  }
}

function isAlreadyDone(queNum, alreadyFinishedQue, index) {
  if (index === alreadyFinishedQue.length) {
    return false;
  }
  if (+alreadyFinishedQue[index] === queNum) {
    return true;
  }

  return isAlreadyDone(queNum, alreadyFinishedQue, index + 1);
}

function level1(alreadyFinishedQue) {
  for (let index = 0; index < 3; index++) {
    let riddle = 'What has to be broken before you can use it?';
    let ans = 'egg';
    const queNum = Math.ceil((Math.random() * 7));

    switch (queNum) {
      case 0:
        riddle = 'What has to be broken before you can use it?';
        ans = 'egg';
        break;
      case 1:
        riddle = 'I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?';
        ans = 'shadow';
        break;
      case 2:
        riddle = 'What has words, but never speaks?';
        ans = 'book';
        break;
      case 3:
        riddle = 'What has a head and a tail but no body?';
        ans = 'coin';
        break;
      case 4:
        riddle = 'What has hands, but can’t clap?';
        ans = 'clock';
        break;
      case 5:
        riddle = 'Where does today come before yesterday?';
        ans = 'dictionary';
        break;
    }
    addWord(riddle, ans, 1);
  }

  console.log("\n 🎉🥳 Congratulations Level1 Finished!!");
}

function level2(alreadyFinishedQue) {
  for (let index = 0; index < 3; index++) {
    let riddle = 'What goes up and down but doesn’t move?';
    let ans = 'staircase';
    const queNum = Math.ceil((Math.random() * 7));

    switch (queNum) {
      case 0:
        riddle = 'If you’ve got me, you want to share me; if you share me, you haven’t kept me. What am I?';
        ans = 'secret';
        break;
      case 1:
        riddle = 'What goes up and down but doesn’t move?';
        ans = 'staircase';
        break;
      case 2:
        riddle = ' I am an odd number. Take away a letter and I become even. What number am I?';
        ans = 'seven';
        break;
      case 3:
        riddle = 'If you drop me, I crack. If you smile at me, I smile back. What am I?';
        ans = 'mirror';
        break;
      case 4:
        riddle = 'What word begins with E, ends with E, but only has one letter?';
        ans = 'envelope';
        break;
      case 5:
        riddle = 'What goes up but never comes down?';
        ans = 'age';
        break;
    }
    addWord(riddle, ans, 2);

  }

  console.log("\n 🎉🥳 Congratulations Level2 Finished!!");
}

function level3(alreadyFinishedQue) {
  for (let index = 0; index < 3; index++) {
    let riddle = 'What disappears as soon as you say its name?';
    let ans = 'silence';
    const queNum = Math.ceil((Math.random() * 7));

    switch (queNum) {
      case 0:
        riddle = 'What disappears as soon as you say its name?';
        ans = 'silence';
        break;
      case 1:
        riddle = 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?';
        ans = 'r';
        break;
      case 2:
        riddle = 'What can you break without touching it?';
        ans = 'promise';
        break;
      case 3:
        riddle = 'I have branches, but no fruit, trunk or leaves. What am I?';
        ans = 'bank';
        break;
      case 4:
        riddle = 'What is always in front of you but can’t be seen?';
        ans = 'future';
        break;
      case 5:
        riddle = 'I’m tall when I’m young, and I’m short when I’m old. What am I?';
        ans = 'candle';
        break;
    }
    addWord(riddle, ans, 3);
  }

  console.log("\n 🎉🥳 Congratulations Level3 Finished!!");
}

makeGame();
