// 1

// 2 2 2
// 2 1 2
// 2 2 2

// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4


function addTopAndLowerLine(pattern, upperAndLowerRow) {
  pattern.push(upperAndLowerRow);
  pattern.unshift(upperAndLowerRow.toReversed().reverse());
}

function wrapMiddlePart(pattern, number) {
  for (const row of pattern) {
    row.push(number);
    row.unshift(number);
  }
}

function getPattern(number) {
  if (number === 1) {
    return [[1]];
  }

  const pattern = getPattern(number - 1).toReversed().reverse();
  wrapMiddlePart(pattern, number);
  const upperAndLowerRow = Array((number * 2) - 1).fill(number);
  addTopAndLowerLine(pattern, upperAndLowerRow);

  return pattern;
}

console.log(getPattern(4).join('\n'));

