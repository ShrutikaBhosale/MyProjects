const orangeCircle = '🔴';
const greenCircle = '🔵';

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= 100;
  }

  return time;
}

function getCooardinate(x, amplitude, frequency, phase) {
  return Math.round(amplitude * Math.sin(x / frequency) + phase);
}

function repeat(char, numOfTimes) {
  let repeatedString = '';
  for (let index = 0; index < numOfTimes; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function findCoordinates() {
  for (let index = 0; index < 500; index++) {
    const x = getCooardinate(index, 18, 6, 40);
    const y = getCooardinate(-index, 18, 6, 40);

    if (x < y) {
      console.log(repeat(' ', Math.min(x, y)) + orangeCircle + repeat('─', Math.abs(x - y)) + greenCircle);
      delay(1);
    } else {
      console.log(repeat(' ', Math.min(x, y)) + greenCircle + repeat('─', Math.abs(x - y)) + orangeCircle);
      delay(1);
    }
  }
}

findCoordinates();
