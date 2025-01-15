import { useEffect, useState } from "react";

// Generate the winning combinations dynamically based on board size
const generateWinningCombinations = (size) => {
  const combinations = [];

  // Horizontal combinations
  for (let row = 0; row < size; row++) {
    const rowCombo = [];
    for (let col = 0; col < size; col++) {
      rowCombo.push(row * size + col);
    }
    combinations.push(rowCombo);
  }

  // Vertical combinations
  for (let col = 0; col < size; col++) {
    const colCombo = [];
    for (let row = 0; row < size; row++) {
      colCombo.push(row * size + col);
    }
    combinations.push(colCombo);
  }

  // Diagonal combinations (top-left to bottom-right)
  const diag1 = [];
  const diag2 = [];
  for (let i = 0; i < size; i++) {
    diag1.push(i * size + i); // Top-left to bottom-right diagonal
    diag2.push((i + 1) * size - (i + 1)); // Bottom-left to top-right diagonal
  }
  combinations.push(diag1);
  combinations.push(diag2);

  return combinations;
};

const getInitialBoard = (size) => Array(size * size).fill(null);

function useTicTacToeHook(size = 3) {
  console.log(size, "size");
  const [board, setBoard] = useState(getInitialBoard(size));
  const [displayText, setDisplayText] = useState("X's turn");
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState(null);
  const winningCombination = generateWinningCombinations(size);

  // Calculate winner based on the board state
  const calculateWinner = (_board) => {
    // Check all winning combinations
    for (let i = 0; i < winningCombination.length; i++) {
      const combination = winningCombination[i];
      console.log(combination,'comb')
      let countX = 0;
      let countO = 0;

      // Check each combination to see if there is a winner
      for (let index of combination) {
        if (_board[index] === "X") {
          countX++;
        } else if (_board[index] === "O") {
          countO++;
        }
      }

      // If one player has the entire combination filled, they win
      if (countX === size) {
        return "X";
      } else if (countO === size) {
        return "O";
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if ((board) || board[index]) {
      return;
    }

    let currentChance = [...board];
    currentChance[index] = current;
    setBoard(currentChance);

    const winner = calculateWinner(currentChance);
    if (winner) {
      setWinner(winner);
      setDisplayText(`${winner} is the winner!`);
    } else {
      const nextPlayer = current === "X" ? "O" : "X";
      setCurrent(nextPlayer);
      setDisplayText(`${nextPlayer}'s turn`);
    }
  };

  const resetGame = () => {
    setBoard(getInitialBoard(size));
    setWinner(null);
    setCurrent("X");
    setDisplayText("X's turn");
  };

  useEffect(() => {
    setBoard(getInitialBoard(size));
  }, [size]);

  return {
    board,
    displayText,
    handleClick,
    calculateWinner,
    resetGame,
    winner,
  };
}

export default useTicTacToeHook;
