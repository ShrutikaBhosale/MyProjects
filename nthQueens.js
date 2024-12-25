const N = 4;
const resultBoard = [];

const makeBoard = (n) => {
  const row = Array(n).fill('.');
  const board = Array(n).fill(0).map(() => [...row]);
  return board;
};

const isVerticallySafe = (board, col) => {
  return board.every((row) => row[col] === '.');
};

const isHorizontallySafe = (board, row) => {
  return board[row].every((char) => char === '.');

};

const isRightDiagonallySafe = (board, row, col) => { //dirty
  let i = row;
  let j = col;
  while (i >= 0 && j < N) {
    if (board[i][j] === 'Q') {
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
    if (board[i][j] === 'Q') {
      return false;
    }
    i--;
    j--;
  }
  return true;
};

const isSafe = (board, row, col) => {
  return isHorizontallySafe(board, row)
    && isVerticallySafe(board, col)
    && isLeftDiagonallySafe(board, row, col)
    && isRightDiagonallySafe(board, row, col);
};

const placeQueen = (board, row) => {
  if (row === N) {
    resultBoard.push(board.map(row => row.join('')));
    return;
  }

  for (let col = 0; col < N; col++) { //dirty
    if (isSafe(board, row, col)) {
      board[row][col] = 'Q';
      placeQueen(board, row + 1);
      board[row][col] = '.';
    }
  }
};


const main = () => {
  const board = makeBoard(N);
  placeQueen(board, 0);
  return resultBoard.at(-1).join('\n');
};

console.log(main());
