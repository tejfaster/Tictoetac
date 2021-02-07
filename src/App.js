import React, { useState } from 'react';
import Board from './Components/Board';
import { calculateWinner } from './helper'
import History from './Components/History'
import Status from './Components/Status'

import '../src/Styling/root.scss';

const New_Game = [
  { board: Array(9).fill(null), isXNext: true },
]

const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [isXNext, setIsXNext] = useState(false);
  const [history, sethistory] = useState(New_Game);

  const [currentMove, setCurrentMove] = useState(0)

  const current = history[currentMove];

  const { winner, WinnerSquares } = calculateWinner(current.board)

  console.log(winner)

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext })
    });
    setCurrentMove(prev => prev + 1)
    // setIsXNext(prev => !prev);
  };

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  const onNewGame = () => {
    sethistory(New_Game)
    setCurrentMove(0)
  }
  return (
    <div className="app">
      <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
      <Status winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winnerSquares={WinnerSquares} />
      <button type='button' onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}> Start New game</button>
      <h2 >Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <div className='bg-balls' />
    </div>
  );
};

export default App;
