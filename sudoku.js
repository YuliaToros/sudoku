function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
const fs = require("fs");
return fs.readFileSync('./puzzles.txt', 'utf8');
}


function parseSudoku(sudokuText) { /** Преобразует строку судоку в двумерный массив */ 
  return arraySudoku = sudokuText.trim().split('\n').map(line => line.split('')); 
  
}




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
function isSolved(board) {
  // /
  //  * Принимает игровое поле в том формате, в котором его вернули из функции solve.
  //  * Возвращает булевое значение — решено это игровое поле или нет.
  //  */
  const size = 9;
  const boxSize = 3;

  // Проверка строк и столбцов
  for (let i = 0; i < size; i++) {
    const rowSet = new Set();
    const colSet = new Set();
    for (let j = 0; j < size; j++) {
      rowSet.add(board[i][j]);
      colSet.add(board[j][i]);
    }
    if (rowSet.size !== 9 || colSet.size !== 9) {
      return false;
    }
  }

  // Проверка квадратов 3x3
  for (let row = 0; row < size; row += boxSize) {
    for (let col = 0; col < size; col += boxSize) {
      const boxSet = new Set();
      for (let i = 0; i < boxSize; i++) {
        for (let j = 0; j < boxSize; j++) {
          boxSet.add(board[row + i][col + j]);
        }
      }
      if (boxSet.size !== 9) {
        return false;
      }
    }
  }

  return true;
}