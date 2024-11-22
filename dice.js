const LENGTH = 8;
const TWO_DOT = getBorders('⚪️    ⚪️');
const LEFT_DOT = getBorders('⚪️      ');
const MIDDLE_DOT = getBorders('   ⚪️   ');
const RIGHT_DOT = getBorders('      ⚪️');
const EMPTY = getBorders('        ');

function getBorders(string) {
  const border = '┃';
  return border + string + border;
}

function repeat(start, string, end) {
  let repeatedString = '';

  for (let index = 0; index < LENGTH; index++) {
    repeatedString += string;
  }

  return start + repeatedString + end;
}

function joinStrings(start, middle, end) {
  return start + '\n' + middle + '\n' + end;
}

function diceForAll(faceValue) {
  const upperPart = repeat('┏', '━', '┓');
  const middlePart = getMiddlePart(faceValue);
  const lowerPart = repeat('┗', '━', '┛');

  console.log(joinStrings(upperPart, middlePart, lowerPart));
}

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= 100;
  }

  return time;
}

function animate(faceValue) {
  for (let index = 1; index <= 6; index++) {
    console.clear();
    diceForAll(index);
    delay(1);
  }

  console.clear();
  diceForAll(faceValue);
}

function getMiddlePart(faceValue) {
  switch (faceValue) {
    case 1:
      return EMPTY + '\n' + MIDDLE_DOT + '\n' + EMPTY;
    case 2:
      return LEFT_DOT + '\n' + EMPTY + '\n' + RIGHT_DOT;
    case 3:
      return LEFT_DOT + '\n' + MIDDLE_DOT + '\n' + RIGHT_DOT;
    case 4:
      return TWO_DOT + '\n' + EMPTY + '\n' + TWO_DOT;
    case 5:
      return TWO_DOT + '\n' + MIDDLE_DOT + '\n' + TWO_DOT;
    case 6:
      return TWO_DOT + '\n' + TWO_DOT + '\n' + TWO_DOT;
  }
}

function getRandomNumber() {
  return 1 + Math.floor(Math.random() * 10 % 6)
}

animate(getRandomNumber());
