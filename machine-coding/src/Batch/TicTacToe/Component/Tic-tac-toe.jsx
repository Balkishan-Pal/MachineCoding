import React from "react";

import "./Tic-tac-toe.css";
import useTicTacTaoe from "../Hooks/useTicTacTaoe";

function Tictactoe() {

    const {board,handleClick,displayText,resetGame} = useTicTacTaoe()
 

  return (
    <div>
      <div style={{ border: "1px solid black" }}>{displayText}... </div>
      <div className="area">
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
      <button onClick={resetGame}> Reset</button>
    </div>
  );
}

export default Tictactoe;
