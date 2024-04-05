import React, { useState } from "react";
import Square from "./Square";
function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isXterm, setisXterm] = useState(true);

  const chechwinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = chechwinner();
  const handleClick = (index) => {
    if (state[index] != null) {
      return;
    }
    const copystate = [...state];
    copystate[index] = isXterm ? "X" : "0";
    setstate(copystate);
    setisXterm(!isXterm);
  };
  const playAgain = () => {
    setstate(Array(9).fill(null));
  };
  return (
    <div className="board-container">
      {isWinner ? (
        <>
          {" "}
          {isWinner} won the game{" "}
          <button onClick={playAgain}>play Again</button>
        </>
      ) : (
        <>
          <h4>Player {isXterm ? "x" : "O"} Please move</h4>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default Board;
