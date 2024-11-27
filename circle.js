const CENTER = 50;

function delay(time) {
  for (let counter = 0; counter <= 100000000; counter++) {
    time *= 10000;
  }

  return time;
}

function makeCircle() {
  for (let xCooard = 0; xCooard < 100; xCooard += 0.5) {
    let circle = '';
    for (let yCooard = 0; yCooard < 100; yCooard += 0.5) {
      const circleRadius = ((xCooard - CENTER) ** 2) + ((yCooard - CENTER) ** 2);

      circle += circleRadius <= 1000 && circleRadius >= 900 ? '⚪️' : '  ';
    }

    console.log(circle);
    delay(1);
  }

}

makeCircle();
