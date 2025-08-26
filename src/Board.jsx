import { useState } from 'react'

import Square from './Square';
export default function Board({xIsNext , square,onPlay}){
  function handleClick(i){
    if(square[i] || Combinations(square)){
      return;
    }
    const nextSquare = square.slice();
    if(xIsNext){
      nextSquare[i]="X";
    }else{
      nextSquare[i]="O";
    }
    onPlay(nextSquare);
  
  }

  const winner =Combinations(square);
  let status;
  if(winner){
    status = "Winner " + winner + "Player";
  }else{
     status = "Next Player" +( xIsNext ? "X":"O");
  }
  return(
    <>
    <div className='status'> {status}</div>
    <div className='board-row'>
  <Square value={square[0]} onsquareClick={() =>handleClick(0)} />
  <Square value={square[1]} onsquareClick={() =>handleClick(1)} />
  <Square value={square[2]} onsquareClick={() =>handleClick(2)} />
  </div>
  <div className='board-row'>
  <Square value={square[3]} onsquareClick={() =>handleClick(3)} />
  <Square value={square[4]} onsquareClick={() =>handleClick(4)} />
  <Square value={square[5]} onsquareClick={() =>handleClick(5)} />
  </div>
  <div className='board-row'>
  <Square value={square[6]} onsquareClick={() =>handleClick(6)} />
  <Square value={square[7]} onsquareClick={() =>handleClick(7)} />
  <Square value={square[8]} onsquareClick={() =>handleClick(8)} />
  </div>
  </>
  );
}
