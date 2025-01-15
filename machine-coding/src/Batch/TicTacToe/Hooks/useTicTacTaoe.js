import { useState } from "react";

const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getInitialBoard = () => Array(9).fill(null);

function useTicTacTaoe() {
  const [board, setBoard] = useState(getInitialBoard);
  const [displayText, setDisplayText] = useState("X's turn");
  const [current, setCurrent] = useState("X");

  const calulateWinner = (_board) => {
    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];

      if (_board[a] && _board[a] === _board[b] && _board[a] === _board[c]) {
        return _board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (calulateWinner(board)) {
      return;
    }

    let currentChance = [...board];
    currentChance[index] = current;
    setBoard(currentChance);

    if (calulateWinner(currentChance)) {
      let winner = `${current} is the winner`;
      setDisplayText(winner);
    } else {
      const nextPlayer = current === "X" ? "O" : "X";
      setCurrent(nextPlayer);
      setDisplayText(`${nextPlayer}'s chance`);
    }
  };

  const resetGame = () => {
    setBoard(getInitialBoard);
  };

  return { board, displayText, handleClick, calulateWinner, resetGame };
}

export default useTicTacTaoe;
