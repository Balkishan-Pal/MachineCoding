import React, { useState } from "react";
import "./TicTavToeDyanamic.css";
import useTicTacToeHook from "./useTicTacToeHook";

function TictactoeDyanamic() {
  const [size, setSize] = useState(3); // State to change board size (default is 3)
  const { board, handleClick, displayText, resetGame, winner } = useTicTacToeHook(size);

  const handleSizeChange = (event) => {
    setSize(Number(event.target.value)); // Update the size based on user input
  };

  return (
    <div>
      <div style={{ border: "1px solid black" }}>{displayText}...</div>

      {/* Dropdown to select board size */}
      <div>
        <label>Choose Board Size:</label>
        <select onChange={handleSizeChange} value={size}>
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
          <option value={5}>5x5</option>
        </select>
      </div>

      {/* Game Board */}
      <div
        className="area"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          width: `${size * 50}px`,
        }}
      >
        {board.map((val, index) => {
          return (
            <button
              disabled={val !== null}
              className="boxes"
              key={index}
              onClick={() => handleClick(index)}
            >
              {val}
            </button>
          );
        })}
      </div>

      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default TictactoeDyanamic;
