import React, { useState } from 'react';

function Tictac() {
  const [Board,setBoard] = useState(Array(9).fill(null));
  const [next,setNext] = useState(true);

  const winner = calculateWinne(Board);
  const nextPlayer = next ? 'X' : 'O';


function handelClick(index){
  if(Board[index] || winner) return;
    const newBoard = Board.slice();
    newBoard[index] = nextPlayer;
    setBoard(newBoard);
    setNext(!next);
  
}
function handelReset(){
  setBoard(Array(9).fill(null));
  setNext(true);
}

function renderSquare(index){
  return(
    <button className='square' onClick={() => handelClick(index)}>
      {Board[index]}
    </button>
  )
}

  return (
    <div className='game'>
      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {[0,1,2].map(i=>(
          <div className='board-row' key={i}>
            {renderSquare(i * 3)}
            {renderSquare(i * 3 + 1)}
            {renderSquare(i * 3 + 2)}
          </div>
        ))}
      </div>
      <div className="status">
        {
          winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`
        }
      </div>
      <button onClick={handelReset} className="reset">Reset</button>
    </div>
  )
  
  function calculateWinne(square){

    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0; i<lines.length; i++){
      const [a,b,c] = lines[i];
      if(square[a] && square[a]===square[b] && square[a]===square[c]){
        return square[a];
      }
    } 
    return null;
  }
}

export default Tictac
