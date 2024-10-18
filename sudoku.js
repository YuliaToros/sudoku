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



function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  


}

// console.log(solve())


function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
