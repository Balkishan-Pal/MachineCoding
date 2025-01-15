import React, { useState } from "react";
import "./TiTacToePractice.css";
import { useTiTacToePractice } from "./useTiTacToePractice";

function TiTacToePractice() {
  const [size, setSize] = useState(3);
  const { board, dispalyText, handleOnClick, resetGame } =
    useTiTacToePractice(size);

  const handelOnChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handelOnChange}
        value={size}
        placeholder="only numbers"
      />
      <div>{dispalyText}</div>
      <div className="parent-grid" style={{gridTemplateColumns: `repeat(${size}, 1fr)`, width:`calc(${size * 50}px`}} >
        {board?.map((val, index) => {
          return (
            <button className="box" disabled={val !==null} onClick={()=>handleOnClick(index)} key={index}>
              {val}
            </button>
          );
        })}
      </div>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default TiTacToePractice;
