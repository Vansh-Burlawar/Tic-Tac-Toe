import { useState } from 'react'

import './App.css'

function Square({value,onsquareClick}){
return <button className='square' onClick={onsquareClick}>{value}</button>
}

export default function Board(){
  const[square ,setSquare] = useState(Array(9).fill(null));
  return(
    <>
    <div className='board-row'>
  <Square value={square[0]} onsquareClick={handleClick} />
  <Square value={square[1]} onsquareClick={handleClick} />
  <Square value={square[2]} onsquareClick={handleClick} />
  </div>
  <div className='board-row'>
  <Square value={square[3]} onsquareClick={handleClick} />
  <Square value={square[4]} onsquareClick={handleClick} />
  <Square value={square[5]} onsquareClick={handleClick} />
  </div>
  <div className='board-row'>
  <Square value={square[6]} onsquareClick={handleClick} />
  <Square value={square[7]} onsquareClick={handleClick} />
  <Square value={square[8]} onsquareClick={handleClick} />
  </div>
  </>
  );
}