function drawBuilding() {
  const buildingSegment1 = ' __                   ___              __       /\\      __                   ___      /\\      __ ';
  const buildingSegment2 = '|""|  ___    _   __  |"""|  __    __   |""|    / ^\\    |""|  ___    _   __  |"""|    / ^\\    |""|  ___';
  const buildingSegment3 = '|""| |"""|  |"| |""| |"""| |""|  |""|  |""|   /^   \\   |""| |"""|  |"| |""| |"""|   /^   \\   |""| |"""|';
  const buildingSegment4 = '|""| |"""|  |"| |""| |"""| |""|  |""|  |""|  /  ^ ^ \\  |""| |"""|  |"| |""| |"""|  /  ^ ^ \\  |""| |"""|';
  const buildingSegment5 = '|""| |"""|  |"| |""| |"""| |""|  |""|  |""| / ^ ^  ^ \\ |""| |"""|  |"| |""| |"""| / ^ ^  ^ \\ |""| |"""|';

  console.log("\n\n\n\n\n" + buildingSegment1 + '\n' + buildingSegment2 + '\n' + buildingSegment3 + '\n' + buildingSegment4 + '\n' + buildingSegment5);
}

function repeat(char, numOfTimes) {
  let repeatedString = '';
  for (let index = 0; index < numOfTimes; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function drawRoad(numOfTimes) {
  let roadSegment1 = repeat('━', 125) + '⛳️' + "\n";
  let roadSegment2 = repeat('   ━━   ', 16);
  let roadSegment3 = repeat('━', 125) + "\n";
  console.log(roadSegment1 + roadSegment2 + roadSegment3);
}

function moveCar() {
  for (let index = 1; index <= 21.5; index += 0.5) {
    console.clear();
    drawBuilding();

    moveHorizontal(index);
    drawRoad();
    delay(1);
  }
}

function animate() {
  moveCar();
}

function moveHorizontal(numOfTimes) {
  let spaces = '';
  const carSegment1 = '   _____';
  const carSegment2 = '  /|_||👩🏻‍💼\`.__';
  const carSegment3 = ' (   _    _ _\\';
  const carSegment4 = "   `- (_)--(_) ";

  for (let index = 1; index <= numOfTimes; index++) {
    spaces += '     ';
  }

  console.log(spaces + carSegment1 + '\n' + spaces + carSegment2 + '\n' + spaces + carSegment3 + '\n' + spaces + carSegment4);
}

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= time * 2;
  }

  return time;
}

animate();
