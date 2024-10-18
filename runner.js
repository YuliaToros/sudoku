// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, parseSudoku, solveSudoku, isSolved, prettyBoard } = require('./sudoku');

function solve() {
    const sudokuText = read();
    const sudokuArray = parseSudoku(sudokuText);
    const solvedSudoku = solveSudoku(sudokuArray);
    return solvedSudoku;
  }
  
  // Пример использования
  const solvedSudoku = solve(read);
  console.log("Решено ли судоку:", isSolved(solvedSudoku));
  prettyBoard(solvedSudoku);