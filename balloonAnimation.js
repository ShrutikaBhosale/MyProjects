function animate() {
  for (let index = 20; index >= 0; index--) {
    console.clear();
    move(index);
    delay(1);
  }
}

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= 100;
  }

  return time;
}

function setLayout() {
  let balloonString = '';

  for (let counter = 0; counter <= 30; counter++) {
    if (counter % 5 === 0) {
      balloonString += '\n';
      continue;
    }

    if (counter % 3 === 0) {
      balloonString += '🎈';
      continue;
    }

    balloonString += ' ';
  }

  return balloonString;
}

function move(numOfTimes) {
  let newLines = '';

  for (let index = 1; index <= numOfTimes; index++) {
    newLines += '\n';
  }

  console.log(newLines + setLayout());
}

animate();
