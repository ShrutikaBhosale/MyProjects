const carSegment1 = '   _____';
const carSegment2 = '  /|_||_\`.__';
const carSegment3 = ' (   _    _ _\\';
const carSegment4 = "   `-(_)--(_)-'";
function drawRoad(numOfTimes) {
  let repeatedString = '';
  for (let index = 0; index <= numOfTimes; index++) {
    repeatedString += '_';
  }
  console.log("\n" + repeatedString);
}

function makeBackground() {
  const buildingSegment1 = ' ┏━━━━━━┓\n';
  const buildingSegment2 = ' ┃ ┃  ┃ ┃\n'
  const buildingSegment3 = ' ┃ ┃  ┃ ┃\n'
  const buildingSegment4 = ' ┃ ┃  ┃ ┃\n'
  const buildingSegment5 = ' ┗━━━━━━┛\n';
  console.log(buildingSegment1 + buildingSegment2 + buildingSegment3 + buildingSegment4 + buildingSegment5);
}

function moveCar() {
  for (let index = 1; index <= 20; index++) {
    console.clear();
    console.log("     ----------------CAR RACE-------------\n");
    makeBackground();
    moveHorizontal(index, carSegment1, carSegment2, carSegment3, carSegment4, '');
    delay(1);
  }
}

function animate() {
  moveCar();
}

function moveHorizontal(numOfTimes, car1, car2, car3, car4) {
  let newLines = '';

  for (let index = 1; index <= numOfTimes; index++) {
    newLines += '     ';
  }

  console.log(newLines + car1 + '\n' + newLines + car2 + '\n' + newLines + car3 + '\n' + newLines + car4);
}

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= time * 2;
  }

  return time;
}

animate();
