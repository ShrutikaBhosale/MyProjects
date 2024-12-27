const makeBoard = (n) => {
  const row = Array(n).fill('_');
  const board = Array(n).fill(0).map(() => [...row]);
  return board;
};

const isVerticallySafe = (board, col) => {
  return board.every((row) => row[col] === '_');
};

const isHorizontallySafe = (board, row) => {
  return board[row].every((char) => char === '_');

};

const isRightDiagonallySafe = (board, row, col, n) => {
  let i = row;
  let j = col;
  while (i >= 0 && j < n) {
    if (board[i][j] === '♛') {
      return false;
    }
    i--;
    j++;
  }
  return true;
};

const isLeftDiagonallySafe = (board, row, col) => { //dirty
  let i = row;
  let j = col;
  while (i >= 0 && j >= 0) {
    if (board[i][j] === '♛') {
      return false;
    }
    i--;
    j--;
  }
  return true;
};

const isSafe = (board, row, col, n) => {
  return isHorizontallySafe(board, row)
    && isVerticallySafe(board, col)
    && isLeftDiagonallySafe(board, row, col)
    && isRightDiagonallySafe(board, row, col, n);
};

const findAndPlaceInSafePos = (board, row, resultBoard, n) => {
  for (let col = 0; col < n; col++) { //dirty
    if (isSafe(board, row, col, n)) {
      board[row][col] = '♛';
      placeNQueens(board, row + 1, resultBoard, n);
      board[row][col] = '_';
    }
  }
};

const placeNQueens = (board, row, resultBoard, n) => {
  if (row === n) {
    resultBoard.push(board.map(row => row.join('')));
    return;
  }

  findAndPlaceInSafePos(board, row, resultBoard, n);
};

const main = (n) => {
  const board = makeBoard(n);
  const resultBoard = [];
  placeNQueens(board, 0, resultBoard, n);
  return resultBoard.join('\n');
};

console.log(main(6));
