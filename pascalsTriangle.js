
//pattern 1
// 1
// 1   1
// 1   2   1
// 1   3   3   1
// 1   4   6   4   1


//pattern2
// 1 2 3 4 5 4 3 2 1
//   2 3 4 5 4 3 2
//     3 4 5 4 3
//       4 5 4
//         5
//       4 5 4
//     3 4 5 4 3
//   2 3 4 5 4 3 2
// 1 2 3 4 5 4 3 2 1



function wrap(initial, element) {
  element.push(initial);
  element.unshift(initial);
  return initial;
}

function getCurrentRow(pattern) {
  const currentRow = [];

  for (let row = 0; row < pattern.at(-1).length - 1; row++) {
    currentRow.push(pattern.at(-1)[row] + pattern.at(-1)[row + 1]);
  }

  return currentRow;
}

function getPattern(number) {
  const pattern = [[1]];

  for (let index = 1; index < number; index++) {
    const currentRow = getCurrentRow(pattern);
    [currentRow].reduce(wrap, 1);
    pattern.push(currentRow);
  }

  return pattern.join('\n');
}

console.log(getPattern(1));
// console.log(getPattern(2));
console.log(getPattern(3));
// console.log(getPattern(4));
// console.log(getPattern(6));
