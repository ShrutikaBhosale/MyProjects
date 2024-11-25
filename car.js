
function drawRoad(numOfTimes) {
  let repeatedString = '';
  for (let index = 0; index <= numOfTimes; index++) {
    repeatedString += '_';
  }
  console.log("\n" + repeatedString);
}


function moveCar() {
  for (let index = 1; index <= 20; index++) {
    console.clear();
    console.log("     ---------------- CAR RACE -------------\n");
    moveHorizontal(index);
    delay(1);
  }
}

function animate() {
  moveCar();
}

function moveHorizontal(numOfTimes) {
  let newLines = '';
  const carSegment1 = '   _____';
  const carSegment2 = '  /|_||_\`.__';
  const carSegment3 = ' (   _    _ _\\';
  const carSegment4 = "   `-(_)--(_)-'";
  const roadSegment = ' ━━━━━━━━━━━━━━\n';

  for (let index = 1; index <= numOfTimes; index++) {
    newLines += '     ';
  }

  console.log(newLines + carSegment1 + '\n' + newLines + carSegment2 + '\n' + newLines + carSegment3 + '\n' + newLines + carSegment4);
  console.log(newLines + roadSegment);
}

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= time * 2;
  }

  return time;
}

animate();
