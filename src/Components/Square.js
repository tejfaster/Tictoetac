import React from 'react';

const Square = ({ value, onClick, WinnigSquare }) => {
  return (
    <button
      type="button"
      // className="square" 
      onClick={onClick}
      className={`square ${WinnigSquare ? 'winning' : ''
        }${value === 'X' ? 'text-green' : 'text-orange'
        }`}
    // style={{
    //   fontWeight: WinnigSquare ? 'bold':'normal'
    //  }}
    >
      {value}
    </button>
  );
};

export default Square;
