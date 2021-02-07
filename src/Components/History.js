import React from 'react'

export default function History({ history, moveTo, currnetMove }) {
    return (
        <div className="history-wrapper">
            <ul className="history">
                {
                    history.map((_, move) => {
                        return (
                            <li key={move}>
                                <button
                                    className={`btn-move${move === currnetMove ? 'active' : ''}`}
                                    type='button'
                                    onClick={() => {
                                        moveTo(move)
                                    }}>
                                    {move === 0 ? `Go to game Start` : `Go to move #${move}`}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
