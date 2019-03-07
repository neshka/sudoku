"use strict";

const invalidBoard = [
  [5, 3, 4, 6, 7, 9, 8, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 7],
  [6, 9, 8, 3, 4, 2, 7, 6, 5],

  [8, 5, 9, 7, 6, 1, 4, 2, 1],
  [4, 2, 6, 8, 5, 3, 7, 8, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const validBoard = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

// unit tests
console.log("Invalid board is invalid: " + !isValid(invalidBoard));
console.log("Valid board is valid: " + isValid(validBoard));

// Rules
// - Each row must contain the numbers 1 through 9 with no repetitions.
// - Each column must contain the numbers 1 through 9 with no repetitions.
// - Each 3x3 block must contain the numbers 1 through 9 with no repetitions.

function takeRow(board, index) {
  let row = [];
  return (row = board[index]);
}

function takeColumn(board, index) {
  let column = [];

  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    column.push(row[index]);
  }

  return column;
}

function checkArray(array) {
  for (let j = 0; j < array.length; j++) {
    for (let k = j + 1; k < array.length; k++) {
      if (array[j] === array[k]) {
        return false;
      }
    }
  }
  return true;
}

function isRowValid(board) {
  let wasRowValid;
  for (let i = 0; i < board.length; i++) {
    let row = [];
    row = takeRow(board, i);
    wasRowValid = wasRowValid && checkArray(row);
  }

  return wasRowValid;
}

function isColumnValid(board) {
  let wasColumnValid;
  for (let i = 0; i < board.length; i++) {
    let column = [];
    column = takeColumn(board, i);
    wasColumnValid = wasColumnValid && checkArray(column);
  }

  return wasColumnValid;
}

function isValid(board) {
  return isRowValid(board) && isColumnValid(board);
}

console.log("test");
