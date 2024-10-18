function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
const fs = require("fs");
return fs.readFileSync('./puzzles.txt', 'utf8');
}

//++++++

function solveSudoku(board) {
  /**
   * Решает судоку с использованием алгоритма "backtracking"
   */
  const size = 9;
  const boxSize = 3;

  function findEmpty(board) {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === 0) {
          return [r, c];
        }
      }
    }
    return null;
  }

  function isValid(board, pos, num) {
    const [r, c] = pos;

    // Проверка строки
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Проверка столбца
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Проверка квадрата
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  }

  function solve() {
    const currentPos = findEmpty(board);

    if (currentPos === null) {
      return true;
    }

    const [r, c] = currentPos;

    for (let num = 1; num <= 9; num++) {
      if (isValid(board, currentPos, num)) {
        board[r][c] = num;

        if (solve()) {
          return true;
        }

        board[r][c] = 0;
      }
    }

    return false;
  }

  solve();
  return board;
}