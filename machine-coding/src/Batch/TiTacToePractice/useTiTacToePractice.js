import React, { useEffect, useState } from "react";

const getBoard = (_size) => Array(_size * _size).fill(null);

const winningCombination = (size) => {
  const overAllCombination = [];

  // rows
  for (let row = 0; row < size; row++) {
    let rowComb = [];
    for (let col = 0; col < size; col++) {
      rowComb.push(row * size + col);
    }
    overAllCombination.push(rowComb);
  }

  // columns
  for (let col = 0; col < size; col++) {
    let colComb = [];
    for (let row = 0; row < size; row++) {
      colComb.push(row * size + col);
    }
    overAllCombination.push(colComb);
  }

  // diagonal
  let diagonalComb = [];
  let oppDiabgoanlComb = [];
  for (let i = 0; i < size; i++) {
    diagonalComb.push(i * size + i);
    oppDiabgoanlComb.push((i + 1) * size - (i + 1));
  }
  overAllCombination.push(diagonalComb);
  overAllCombination.push(oppDiabgoanlComb);

  return overAllCombination;
};

export function useTiTacToePractice(size = 3) {
  const [board, setBoard] = useState();
  const [currentChance, setCurrentChance] = useState("X");
  const [dispalyText, setDisplayText] = useState("X's turn");
  let winningComb = winningCombination(size);

  const calcualteWiner = (board) => {
    for (let i = 0; i < winningComb.length; i++) {
      let xCount = 0;
      let oCount = 0;
      let combination = winningComb[i];

      for (let comp of combination) {
        if (board[comp] === "X") {
          xCount++;
        } else if (board[comp] === "O") {
          oCount++;
        }
      }
      if (xCount === size) {
        return "X";
      } else if (oCount === size) {
        return "O";
      } 
    }
    return null
  };

  console.log(board, "board");
  const handleOnClick = (index) => {
    if (calcualteWiner(board)) {
      return;
    }

    let newBoard = [...board];
    newBoard[index] = currentChance;
    setBoard(newBoard);

    let winner = calcualteWiner(newBoard);
    console.log(winner, "winner");
    if (winner) {
      setDisplayText(`Player ${winner} wins`);
      return;
    }

    // set opposite player chance
    let nextPlayerChance = currentChance === "X" ? "O" : "X";
    let textDisplay = currentChance === "X" ? "O's turn" : "X's turn";
    setDisplayText(textDisplay);
    setCurrentChance(nextPlayerChance);
  };
  const resetGame = () => {
    setDisplayText("X's turn");
    setBoard(getBoard(size));
    setCurrentChance("X");
  };

  useEffect(() => {
    setBoard(getBoard(size));
  }, [size]);

  return { board, dispalyText, handleOnClick, resetGame };
}
