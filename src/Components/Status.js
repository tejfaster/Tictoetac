import React from 'react'

export default function Status({ winner, current }) {

    // const message = winner
    //     ? `Winner is ${winner}`
    //     : `Next Player is ${current.isXNext ? 'X' : 'O'}`

    const noMoveLeft = current.board.every(el => el !== null)

    return (
        <div className="status-message">
            {winner && (
                <>
                    Winner is {' '}
                    <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                        {winner}
                    </span>
                </>
            )}
            {!winner && !noMoveLeft &&
                <>
                    Next player is <span className={current.isXNext ? 'text-green' : 'text-orange'}>{current.isXNext ? 'X' : 'O'}</span>
                </>
            }
            {!winner && noMoveLeft &&
                <>
                    <span className="text-green">
                        X
                        </span>
                         and
                    <span className="text-orange">
                        O
                              </span>
                              tied

                </>
            }
        </div>
    )
}
