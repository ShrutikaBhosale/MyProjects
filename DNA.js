const redCircle = '🟠';
const yellowCircle = '🟢';

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= 100;
  }

  return time;
}
function getCooardinate(x, amplitude, frequency, phase) {
  return Math.round(amplitude * Math.sin(x / frequency) + phase);
}

function drawLine(numOfTimes) {
  const string = '';
  for (let index = 0; index < numOfTimes; index++) {
    string += ' ';
  }
  return string;
}

function findCoordinates() {
  for (let index = 0; index < 200; index++) {
    const x = getCooardinate(index, 7, 7, 7);
    const y = getCooardinate(-index, 7, 7, 7);
    if (x < y) {
      printDot(x, redCircle, ' ');
      delay(1);
      printDot(y, yellowCircle, '_');
    } else {
      printDot(x, redCircle, '_');
      delay(1);
      printDot(y, yellowCircle, ' ');
    }
  }
}

function printDot(value, symbol, char) {
  let dnaString = '';
  for (let index = 0; index < value; index++) {
    dnaString += char;
  }
  dnaString += symbol;
  console.log(dnaString);
}


findCoordinates();
